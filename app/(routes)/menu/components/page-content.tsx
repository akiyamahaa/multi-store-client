import Box from "@/components/box";
import { Products } from "@/types-db";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

interface PageContentProps {
  products: Products[];
}

export default function PageContent({ products }: PageContentProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentParams = Object.fromEntries(searchParams.entries());

  const handleClick = (param: string) => {
    if (currentParams.hasOwnProperty(param)) {
      const newParams = { ...currentParams };
      delete newParams[param];
      const href = queryString.stringifyUrl({
        url: "/menu",
        query: newParams,
      });
      router.push(href);
    }
  };

  
  return <>
  <Box className="pt-4 pb-24 flex-col items-start">
  <Box className="text-neutral-700 text-sm items-center">

  </Box>
  </Box>
  </>;
}
