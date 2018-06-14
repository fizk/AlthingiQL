export const deconstructRequestCursor = (cursor = '0-') => {
    const [all, from, to] = cursor.match(/([0-9]*)-([0-9]?)/);
    return {
        from: Number(from),
        to: to === '' ? undefined : Number(to),
    };
};
