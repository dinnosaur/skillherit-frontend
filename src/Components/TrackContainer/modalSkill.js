import React, { Fragment, useState, useEffect, useRef } from "react"
import ShowSkill from "../showSkill";

 function ModalSkill(props) {
    return(
        <>
        {console.log(props.track)}
        <div id="modal-full1" class="uk-modal-full" data-uk-modal data-uk-overflow-auto>
             <div class="uk-modal-dialog" >
                <button class="uk-modal-close-full uk-close-large" type="button" data-uk-close></button>
                <ShowSkill skillId={props.track.skill_id}/>
             </div>
         </div>
         </>
    )
}

export default ModalSkill