import { statusColor } from '../../utils/statusColor';

function CharacterCard({ char, onSelect }) {
    return (
        <div className="rm-card">
            <div className="bg-gray-200 aspect-square">
                <img src={char.image} alt={char.name} className="w-full h-full object-cover" />
            </div>
            <div className="rm-card-body">
                <p className="rm-card-name">{char.name}</p>
                <p className="rm-card-species">{char.species}</p>
                <p className={`text-xs ${statusColor(char.status)} mb-3`}>● {char.status}</p>
                <button onClick={() => onSelect(char.id)} className="rm-card-btn">
                    Detalle
                </button>
            </div>
        </div>
    );
}

export default CharacterCard;
