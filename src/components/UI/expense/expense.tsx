import { useState } from 'react';
import {
  Container,
  Title,
  Subject,
  Head,
  Form,
  Label,
  Input,
  Button,
} from './expense.styles';
import { ExpenseProps } from './expense.types';
import {
  FiArrowDownCircle,
  FiArrowUpCircle,
  FiCheckSquare,
} from 'react-icons/fi';
import { IoCheckmarkCircle, IoCloseCircle } from 'react-icons/io5';
import { IconType } from 'react-icons';

import axios from 'axios';
import { useForm } from 'react-hook-form';

interface FormValues {
  image: any;
}

export function Expense({}: ExpenseProps) {
  const { register, handleSubmit } = useForm();

  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedFile, setSelectedFile] = useState<File>();

  const handleUpload = async () => {
    setUploading(true);
    try {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append('myImage', selectedFile);
      const { data } = await axios.post('/api/image', formData);
      console.log(data);
    } catch (error: any) {
      console.log(error.response?.data);
    }
    setUploading(false);
  };

  const [values, setValues] = useState<FormValues>({
    image: null,
  });

  console.log(selectedImage);

  return (
    <Container>
      <Head>
        <Title>Pagar despesa: </Title>
        <Subject>{}</Subject>
      </Head>
      {/* handleSubmit(handleExpense) */}
      <Form onSubmit={handleSubmit(handleUpload)}>
        <Label htmlFor="image">Comprovativo</Label>

        <Input
          id="image"
          name="image"
          type="file"
          accept="image/*"
          onChange={({ target }) => {
            if (target.files) {
              const file = target.files[0];
              setSelectedImage(URL.createObjectURL(file));
              setSelectedFile(file);
            }
          }}
          // onChange={handleInputChange}
          required
        />
        <div className="w-80 aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer">
          {selectedImage ? (
            <img src={selectedImage} alt="" />
          ) : (
            <span>Select Image</span>
          )}
        </div>
        <Button type="submit">Enviar comprovativo</Button>
      </Form>
    </Container>
  );
}
