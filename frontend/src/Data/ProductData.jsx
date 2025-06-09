
import loanLogo from "../Images/Products/Loans/loanLogo.png";
import depositLogo from "../Images/Products/Deposits/depositLogo.jpeg";

const Products = [

    {
        productTitle: "Deposit",
        productSubTitle:"Saving Products",
        productDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dolore optio, nostrum quod ad veniam sequi quisquam sunt neque ex? Laboriosam ipsam fugiat, dolore temporibus voluptatibus soluta corporis dolorem veniam laborum nam impedit facilis dolor.",
        productTitleImage: depositLogo,
        productId: "1",
        Topics: [
            {
                innerTitle: "Sahas Saving",
                 productInnerImage: depositLogo,
                innerDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dolore optio, nostrum quod ad veniam sequi quisquam sunt neque ex? Laboriosam ipsam fugiat, dolore temporibus voluptatibus soluta corporis dolorem veniam laborum nam impedit facilis dolor.",
                innerId:"1"
            },
            {
                innerTitle: "Bal Saving",
                 productInnerImage: depositLogo,
                innerDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dolore optio, nostrum quod ad veniam sequi quisquam sunt neque ex? Laboriosam ipsam fugiat, dolore temporibus voluptatibus soluta corporis dolorem veniam laborum nam impedit facilis dolor.",
                innerId:"2"
            }
        ]
    },


    {
        productTitle: "Loan",
        productSubTitle:"Loans",
        productDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dolore optio, nostrum quod ad veniam sequi quisquam sunt neque ex? Laboriosam ipsam fugiat, dolore temporibus voluptatibus soluta corporis dolorem veniam laborum nam impedit facilis dolor.",
        productTitleImage: loanLogo,
        productId: "2",
        Topics: [
            {
                innerTitle: "Home Loan",
                 productInnerImage: loanLogo,
                innerDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dolore optio, nostrum quod ad veniam sequi quisquam sunt neque ex? Laboriosam ipsam fugiat, dolore temporibus voluptatibus soluta corporis dolorem veniam laborum nam impedit facilis dolor.",
                innerId:"1"
            },
            {
                innerTitle: "Personal Loan",
                 productInnerImage: loanLogo,
                innerDescription: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dolore optio, nostrum quod ad veniam sequi quisquam sunt neque ex? Laboriosam ipsam fugiat, dolore temporibus voluptatibus soluta corporis dolorem veniam laborum nam impedit facilis dolor.",
                innerId:"2"
            }
        ]
    },
    


]
export default Products;