import React from 'react'
import TextWithIcon from './TextWithIcon'
import MyButton from './Button'
import "./upgrade.css"

function Left() {
  return (
    <> 
    
    <div className='left' style={{margin: "20px"}}>
        <div className='free' >FREE</div>
      <MyButton text={"Sign Up - It's free"}/> 
      <TextWithIcon verify={true} text={"125 Words in Paraphraser"}/>
      <TextWithIcon verify={true} text={"Standard and Fluency Modes"}/>
      <TextWithIcon verify={true} text={"Limited Use of Synonym Slider"}/>
      <TextWithIcon verify={true} text={"1 Freeze Word or Phrase"}/>
      <TextWithIcon verify={true} text={"2500 Words in Summarizer"}/>
      <TextWithIcon verify={false} text={"Faster processing speed"}/>
      <TextWithIcon verify={false} text={"Plagiarism Checker"}/>
      <TextWithIcon verify={false} text={"Compare Modes"}/>
      <TextWithIcon verify={false} text={"Recommended Rewrites"}/>
      <TextWithIcon verify={false} text={"Tone Insights"}/>
      <div className="lastline" >No credit card required</div>
    </div>
    </>
   
  )
}

export default Left
