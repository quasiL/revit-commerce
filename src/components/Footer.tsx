import Image from "next/image";

export default function Footer() {
  const flexBetween = "flex items-center justify-between";

  return (
    <footer className={`${flexBetween} px-4 py-6 w-full h-80 bg-zinc-800`}>
      <div className={`${flexBetween} w-2/3 mx-auto px-32 text-white`}>
        <Image
          className="w-48 h-48 rounded-full object-cover"
          src="/model.webp"
          width={200}
          height={200}
          alt="Model building"
        />
        <div className="flex flex-col gap-2">
          <p>Some info here more text</p>
          <p>Some info here more text</p>
          <p>Some info here more text</p>
        </div>
      </div>
    </footer>
  );
}
