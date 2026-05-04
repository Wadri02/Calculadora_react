export function statusColor(status) {
    return { Alive: 'text-green-500', Dead: 'text-red-500', unknown: 'text-gray-400' }[status] || 'text-gray-400';
}
