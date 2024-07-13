import React from 'react'
import { AiOutlineDiscord } from "react-icons/ai";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { AiOutlineProject } from "react-icons/ai";
import { HomeBlock } from './Home';


import './../src/main.css'
import {Row, Col} from 'antd'


export default function About() {
  const items = [
    {
      key: 1,
      title: "Artificial Intelligence", 
      icon: <AiOutlineDiscord />,
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, eveniet facilis sit aspernatur repellendus aut!"
        }, 
        {
          key: 2,
          title: "Web App Development", 
          icon: <AiOutlineProject />,
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, eveniet facilis sit aspernatur repellendus aut!"
            }, 
            {
              key: 3,
              title: "Application Development", 
              icon: <AiOutlineUserSwitch />,
              content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, eveniet facilis sit aspernatur repellendus aut!"
                }
  ]
  return (
    <HomeBlock className='aboutBlock'>
    <div className='block aboutBlock' style={{paddingLeft: "0px !important", paddingRight: "0px !important"}}>
      <div className='container  '>
          <div className="titleHolder">
            <h2>About Us Page</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div className="contentHolder">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum repudiandae non maxime ipsa, minima blanditiis ad a quaerat quasi quibusdam maiores, laboriosam aspernatur tempora quae. Explicabo perferendis fugit quidem ratione. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sunt cumque repellendus asperiores voluptatibus fugit dolorem, cupiditate eum vero eaque autem, tenetur, tempore architecto reprehenderit? Omnis sint quisquam similique suscipit!
          </div>
      </div>
      <Row gutter={[16, 16]}>
        {items.map(item=>{
          return(
          <Col span={8} key= {item.key} >
              <div className="content">
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              </div>
          </Col>
          )
        })}
    </Row>
      
  
    </div>
    </HomeBlock>
  )
}
