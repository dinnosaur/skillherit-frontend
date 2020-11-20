import React, { Fragment, useState, useEffect, useRef } from "react"
import ShowSkill from "../showSkill";

 function ModalSkill(props) {
    return(
        <>
        <div id="modal-full1" class="uk-modal-full" data-uk-modal >
             <div class="uk-modal-dialog" data-uk-overflow-auto>
                <button class="uk-modal-close-full uk-close-large" type="button" data-uk-close></button>
                <ShowSkill skillId={props.track.skill_id}/>
             </div>
         </div>
         </>
    )
}

export default ModalSkill