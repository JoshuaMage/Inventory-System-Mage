export function sortData(data, sortBy, sortOrder) {
    return data.sort((a, b) => {
        if (typeof a[sortBy] === 'number' && typeof b[sortBy] === 'number') {
            return sortOrder === 'asc' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy];
        } else {
            if (a[sortBy] < b[sortBy]) return sortOrder === 'asc' ? -1 : 1;
            if (a[sortBy] > b[sortBy]) return sortOrder === 'asc' ? 1 : -1;
            return 0;
        }
    });
}

export function filterData(data, searchTerm) {
    return data.filter((item) =>
        Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
}

export function getArrow(sortOrder) {
    const arrowDown = `<svg width="15" height="15" viewBox="-0.163 0 0.8 0.8" xmlns="http://www.w3.org/2000/svg">
        <path d="m0.47 0.285 -0.198 0.248c-0.019 0.023 -0.048 0.023 -0.066 0L0.009 0.285c-0.019 -0.023 -0.009 -0.041 0.02 -0.041h0.422c0.03 0 0.038 0.018 0.02 0.041" />
    </svg>`;

    const arrowUp = `<svg width="15" height="15" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="m10 6.667 5.833 6.667H4.167z" /></svg>`;

    return sortOrder === 'asc' ? arrowUp : arrowDown;
}

export function getPendingClass(status) {
    return status === 'pending' ? 'text-red-500' : 'text-black';
}
