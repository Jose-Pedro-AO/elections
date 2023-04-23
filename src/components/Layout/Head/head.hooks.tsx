import { useEffect } from "react";

export function usePageTitle(text: string) {
  useEffect(() => {
    document.title = text;
  }, [text]);
}
