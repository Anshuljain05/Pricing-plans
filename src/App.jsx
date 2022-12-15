
import styled from 'styled-components';
import Pricing from './components/Pricing';

function App() {
  const plans = [
    {
      data: [
        { boldText: "WhatsApp Group", text: "8 am - 11 pm", value: true },
        { boldText: "Basic Medical Queries", text: "Unlimited", value: true },
        { boldText: "Private Chat", text: "With dedicated Pediatrician", value: true },
        { boldText: "Video Consultation", text: "6 free consultations (Pediatrician/ Gynaecologist/ Nutritionists/ Lactation)", value: true },
        { boldText: "Additional Consultations", text: "20% Discount", value: true },
        { boldText: "Growth tracking for baby", text: "Monthly", value: true },
      ],
      price: 348,
      duration: "m",
      background: "linear-gradient(to left, #ff0844 0%, #ffb199 100%);",
      shadow: "#ffb199",
      currency: "₹",
      buttonContent: "Pay Now",
      headerText: "Premium Care"
    },
    {
      data: [
        { boldText: "WhatsApp Group", text: "8 am - 11 pm", value: true },
        { boldText: "Basic Medical Queries", text: "Unlimited", value: true },
        { boldText: "Private Chat", text: "NA", value: false },
        { boldText: "Video Consultation", text: "2 Free Consultations (Pediatrician Only)", value: true },
        { boldText: "Additional Consultations", text: "20% Discount", value: true },
        { boldText: "Growth tracking for baby", text: "Not Included", value: false },
      ],
      price: 1248,
      duration: "y",
      background: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
      shadow: "#96e6a1",
      currency: "₹",
      buttonContent: "Pay Now",
      headerText: "Basic Access+"
    },
    {
      data: [
        { boldText: "WhatsApp Group", text: "8 am - 11 pm", value: true },
        { boldText: "Basic Medical Queries", text: "Unlimited", value: true },
        { boldText: "Private Chat", text: "NA", value: false },
        { boldText: "Video Consultation", text: "No Free Consultations", value: false },
        { boldText: "Additional Consultations", text: "20% Discount", value: true },
        { boldText: "Growth tracking for baby", text: "Not Included", value: false },
      ],
      price: 748,
      duration: "y",
      background: "",
      shadow: "",
      currency: "₹",
      buttonContent: "Pay Now",
      headerText: "Basic Access"      
    }    
  ];
  return (
    <>
      <MainContainer>
        {plans && plans.map((plan, index) => (
          <div className="pricing-component">
            <Pricing 
              data={plan.data}
              price={plan.price}
              duration={plan.duration}
              background={plan.background}
              shadow={plan.shadow}
              currency={plan.currency}
              buttonContent={plan.buttonContent}
              subTitle={plan.subTitle}
              priceText={plan.priceText}
              headerText={plan.headerText}
              key={index}
            />
          </div>
        ))}
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f5f1ff;
  @media screen and (max-width: 1400px) {
    height: 100%;
    flex-direction: column;
    .pricing-component {
      margin: 2rem 0;
    }
  }
`;
export default App;
