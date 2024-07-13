import React from 'react';
import { HomeBlock } from './Home';
import { Card, Col, Row, ConfigProvider } from 'antd';
const { Meta } = Card;
const Services = () => {
  
  const items = [
    {
        key: 1, 
        image: "https://selfmadewebdesigner.com/wp-content/uploads/2022/01/the-best-way-to-learn-web-development-in-2022-without-getting-stuck.jpg", 
        title: "Web App Development", 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolores similique aperiam perspiciatis nesciunt deleniti molestiae hic dicta libero impedit?"
    }, 
    {
      key: 1, 
      image: "https://d2ms8rpfqc4h24.cloudfront.net/mobile_application_development_ad3f711b7d.jpg", 
      title: "Mobile Application Development", 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolores similique aperiam perspiciatis nesciunt deleniti molestiae hic dicta libero impedit?"
    },
    {
      key: 1, 
      image: "https://c.files.bbci.co.uk/14202/production/_108243428_gettyimages-871148930.jpg", 
      title: "Integration of Artificial Intelligence", 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolores similique aperiam perspiciatis nesciunt deleniti molestiae hic dicta libero impedit?"
    }, 
    {
      key: 1, 
      image: "https://cdn.sanity.io/images/599r6htc/regionalized/347524dc8e1d86bf2d3964d79b0ad44b0ba549db-1080x541.png?w=1200&q=70&fit=max&auto=format", 
      title: "UI/UX Design", 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolores similique aperiam perspiciatis nesciunt deleniti molestiae hic dicta libero impedit?"
    }, 
    {
      key: 1, 
      image: "https://www.zabala.eu/wp-content/uploads/2023/11/Artificial-intelligente-and-consultancy-450x253.jpg", 
      title: "Artificial Intelligence Models", 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolores similique aperiam perspiciatis nesciunt deleniti molestiae hic dicta libero impedit?"
    }, 
    {
      key: 1, 
      image: "https://reputationtoday.in/wp-content/uploads/2020/10/solution-777x437.jpg", 
      title: "Realtime Solutions", 
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolores similique aperiam perspiciatis nesciunt deleniti molestiae hic dicta libero impedit?"
    }
  ]
  return(
  <HomeBlock>
  <ConfigProvider
  theme={{
    components: {
      Card: {
        actionsBg: "#070707"
      }
    },
    token:{
      colorBgContainer: "#1e1e1e",
      colorText: "white", 
      colorTextDescription: "white", 
      colorTextHeading	: "white", 
      lineType: "none"
    }
  }}
>
  <div className="block featureBlock">
    <div className="container-fluid">
    <div className="titleHolder">
            <h2>Services</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>

  <Row gutter={[16, 16]}>
  
    {
      items.map(item=>{
        return(
          <Col span={8} key = {item.key}>
          <Card 
          
          hoverable 
          style={{
            width: "18rem",
          }}
          cover={
            <img style={{height: '10rem'}}
              src={item.image}
            />
          }
          actions={[
           "Learn More" 
            
          ]}
        >
          <Meta
            title={item.title}
            // description={item.description}
          />
        </Card>
 </Col>
        )
        
      })
    }

</Row>
  </div>
  </div>
</ConfigProvider>
  </HomeBlock>
  )
};
export default Services;