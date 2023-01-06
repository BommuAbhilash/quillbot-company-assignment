import React from 'react'
import "./upgrade.css";
import NewButton from './NewButton';
import TextWithIcon from './TextWithIcon';

function Right() {
    return (
        <> 
       
        <div className='left' style={{margin: "20px"}}>
             <div className='premium'>PREMIUM</div>
          <NewButton text={"Upgrade to Premium"} /> 
          <TextWithIcon verify={true} text={"Unlimited Words in Paraphraser"}/>
          <TextWithIcon verify={true} text={"Formal, Simple, Creative, Expand and Shorten Modes"}/>
          <TextWithIcon verify={true} text={"Full Use of Synonym Slider"}/>
          <TextWithIcon verify={true} text={"Unlimited Freeze Words and Phrases"}/>
          <TextWithIcon verify={true} text={"6000 Words in Summarizer"}/>
          <TextWithIcon verify={true} text={"Faster Processing Speed"}/>
          <TextWithIcon verify={true} text={"Plagiarism Checker"}/>
          <TextWithIcon verify={true} text={"Compare Modes"}/>
          <TextWithIcon verify={true} text={"Recommended Rewrites"}/>
          <TextWithIcon verify={true} text={"Tone Insights"}/>
          <div className="lastline">3-day money back guarantee</div>
        </div>
        </>
    )
}

export default Right
