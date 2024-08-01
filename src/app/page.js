export default function Home() {
    // States
    const [input, setInput] = useState(null);
    const [response, setResponse] = useState(null);
    return (
        <div className="flex flex-col relative bg-grey font-mono items-center min-h-screen border-t-2 border-active">
            <h1 className="text-6xl font-bold text-primary mt-20">
                QR Code <span className="text-active">Generator</span>
            </h1>
            <h2 className="text-active text-2xl mt-6">
                Generate a QR Code for sharing your content.
            </h2>
            <input
                type="text"
                placeholder="Enter a link, number or any text to generate the QR Code"
                className="mt-10 text-sm w-1/2 p-4 rounded"
                onChange={e => setInput(e.target.value)}
            ></input>
            <button className="mt-6 p-4 bg-active hover:opacity-90 rounded text-primary font-bold inline-flex">
                Generate QR Code
            </button>
        </div>
    );
}