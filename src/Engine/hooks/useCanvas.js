export function useCanvas() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas !== null
        ? canvas.getContext("2d")
        : false;

    const offCanvas = new OffscreenCanvas(1024, 1024);
    const offCtx = offCanvas.getContext('2d');

    return { canvas, ctx, offCanvas, offCtx }
}