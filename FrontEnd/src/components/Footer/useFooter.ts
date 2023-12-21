export interface FooterProps {}

export const useFooter = (props: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return { ...props ,currentYear   }
}
