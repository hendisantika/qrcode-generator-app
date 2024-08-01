export default function Home() {
  return (
      <div className="flex flex-col relative bg-grey font-mono items-center min-h-screen border-t-2 border-active">
          <h1 className="text-6xl font-bold text-primary mt-20">
              QR Code <span className="text-active">Generator</span>
          </h1>
          <h2 className="text-active text-2xl mt-6">
              Generate a QR Code for sharing your content.
          </h2>
      </div>
  );
}