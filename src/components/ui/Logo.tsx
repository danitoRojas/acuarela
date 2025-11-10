// components/ui/Logo.tsx
import Image from "next/image";

export default function Logo() {
  return (
    <div className="size-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
      <Image src="/img/acuarela/logo.png" alt="Logo" width={32} height={32} />
    </div>
  );
}
