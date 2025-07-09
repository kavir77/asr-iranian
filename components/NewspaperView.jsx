export default function NewspaperView({ imageUrl, number }) {
    return (
        <div className="rounded overflow-hidden shadow-md bg-white p-2 drop-shadow-gray-300">
            <img
                src={imageUrl}
                alt={`نسخه شماره ${number}`}
                className="w-full max-w-[700px] object-cover"
            />
        </div>
    );
}
