import { statusColor } from '../../utils/statusColor';

function CharacterModal({ char, onClose }) {
    return (
        <div className="rm-modal-overlay" onClick={onClose}>
            <div className="rm-modal-box" onClick={e => e.stopPropagation()}>
                <div className="flex">
                    <img
                        src={char.image}
                        alt={char.name}
                        className="w-1/2 aspect-square object-cover rounded"
                    />
                    <div className="w-1/2 p-4 flex flex-col justify-center">
                        <h3 className="text-lg font-bold leading-tight mb-1">{char.name}</h3>
                        <p className={`text-sm font-medium ${statusColor(char.status)}`}>● {char.status}</p>
                        <p className="text-sm text-gray-600">{char.species}</p>
                        <p className="text-sm text-gray-600">{char.gender}</p>
                        {char.type && <p className="text-sm text-gray-500 italic">{char.type}</p>}
                    </div>
                </div>

                <div className="px-5 py-4 border-t border-gray-100 text-sm text-gray-700 space-y-1">
                    <p><span className="text-gray-400">Origen:</span> {char.origin.name}</p>
                    <p><span className="text-gray-400">Ubicación actual:</span> {char.location.name}</p>
                    <p><span className="text-gray-400">Episodios:</span> {char.episode.length}</p>
                </div>

                <div className="px-5 pb-5">
                    <button onClick={onClose} className="rm-modal-close-btn">Back</button>
                </div>
            </div>
        </div>
    );
}

export default CharacterModal;
