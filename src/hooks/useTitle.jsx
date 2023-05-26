import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Fan Vault | ${title}`;
  }, []);
};

export default useTitle;
