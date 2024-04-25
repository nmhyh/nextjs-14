import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { UseFormSetError } from "react-hook-form";
import { EntityError } from "@/lib/http";
import { toast } from "@/components/ui/use-toast";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const handleErrorApi = (
    {
        error,
        setError,
        duration
    }: {
      error: any
      setError?: UseFormSetError<any>
      duration?: number
    }
) => {
  if (error instanceof EntityError && setError) {
      error.payload.errors.forEach((item) => {
          setError(
              item.field,
              {
                  type: 'server',
                  message: item.message
              }
          )
      })
  } else {
      toast({
          title: 'Error',
          description: error?.payload?.message ?? 'Error not found',
          variant: duration ?? 5000
      })
  }
}

export const normalizePath = (path: string) => {
    return path.startsWith('/') ? path.slice(1) : path
}
