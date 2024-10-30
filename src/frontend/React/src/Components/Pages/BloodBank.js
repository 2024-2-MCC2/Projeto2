import BloodBankCard from "../ComplementPages/BloodBankCard"
import image from "../../Assets/Sangue.jpg"
import BloodBankTexts from "../ComplementPages/BloodBankTexts"

function BloodBank() {
    const bloodbank=[
        { id: '1', src: image, alt: 'A+', title: "A+" },
        { id: '2', src: image, alt: 'A-', title: "A-" },
        { id: '3', src: image, alt: 'B+', title: "B+" },
        { id: '4', src: image, alt: 'B-', title: "B-" },
        { id: '5', src: image, alt: 'AB+', title: "AB+" },
        { id: '6', src: image, alt: 'AB-', title: "AB-" },
        { id: '7', src: image, alt: 'O+', title: "O+" },
        { id: '8', src: image, alt: 'O-', title: "O-" },
    ]

    return (
        <div>
            <BloodBankTexts/>
            <BloodBankCard bloodbank={bloodbank}/>
        </div>
    ) 
}

export default BloodBank