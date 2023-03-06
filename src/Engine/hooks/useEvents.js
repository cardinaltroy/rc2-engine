import { ScreenToUser } from "../modules/Calc";
import { registerCanvas } from "../modules/CanvasHandler";
import EngineStore from "../stores/engineStore";

//event state
var canvasEvent = { event: false, props: { x: false, y: false } };


export function useEvents() {

    /*
        getEvent, setEvent - only for interaction with rendered objects inside Canvas
    */
   
    const getEvent = () => canvasEvent;

    const setEvent = (e) => {
        if (!e) return false;
        //Disable menu on canvas
        if(e._reactName === 'onContextMenu') e.preventDefault();

        //User click
        let canvasX = e.pageX - e.target.offsetLeft;
        let canvasY = e.pageY - e.target.offsetTop;

        //Set cursor to engine store
        EngineStore.setCursor({ canvasX, canvasY });

        //Scene coordinates
        const pos = ScreenToUser({ x: canvasX, y: canvasY });

        //Set event
        canvasEvent = {
            event: e._reactName,
            props: {
                x: pos.x,
                y: pos.y,
                canvasX,
                canvasY,
                ctrlKey: e.ctrlKey,
                shiftKey: e.shiftKey,
                altKey: e.altKey,
                deltaY: e.deltaY
            }
        }
    }

    const dropEvent = (status) => {
        //Event was on empty space
        if(!status && canvasEvent.event) registerCanvas(canvasEvent);


        //reset event state
        canvasEvent = { event: false, props: { x: false, y: false } };
    }

    return {
        getEvent, dropEvent, setEvent
    }
}