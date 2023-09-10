export function useCanvas() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas !== null 
        ? canvas.getContext("2d")
        : false;

    return { 
        canvas,
        ctx
    }
}