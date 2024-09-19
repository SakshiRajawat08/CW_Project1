import loginpo from "../../../support/constructweekproject/project/loginpo";
import searchfield from "../../../support/constructweekproject/project/searchfield";
import link_po from "../../../support/constructweekproject/project/link_po";
//import loginpo from "../../../support/constructweekproject/project/loginpo";
import Addtocart from "../../../support/constructweekproject/project/Addtocart";
import ShoppingCart from "../../../support/constructweekproject/project/ShoppingCart";
import CheckOut from "../../../support/constructweekproject/project/checkout";
import Continue1 from "../../../support/constructweekproject/project/Continue1";
import Continue2 from "../../../support/constructweekproject/project/Continue2";
import Continue3 from "../../../support/constructweekproject/project/Continue3";
import Continue4 from "../../../support/constructweekproject/project/Continue4";
import TermsandConditions from "../../../support/constructweekproject/project/TermsandConditions";
import Continue5 from "../../../support/constructweekproject/project/Continue5";
import ConfirmOrder from "../../../support/constructweekproject/project/ConfirmOrder";
import myaccount from "../../../support/constructweekproject/project/myaccount";
import MYACCOUNT1 from "../../../support/constructweekproject/project/MYACCOUNT1";
import MYACCOUNT2 from "../../../support/constructweekproject/project/MYACCOUNT2";
import AddToCart2 from "../../../support/constructweekproject/project/AddToCart2";
import Brand from "../../../support/constructweekproject/project/Brand";
import BrandName from "../../../support/constructweekproject/project/BrandName";




describe('', () => {

    const Login_p = new loginpo();
    const Search_Field = new searchfield();
    const Link_po = new link_po();
    //const Login_p = new loginpo();
    const addtocart = new Addtocart();
    const shop_cart = new ShoppingCart();
    const check_out_link = new CheckOut();
    const continue_1 = new Continue1();
    const continue_2 = new Continue2();
    //const shop_cart = new ShoppingCart();
    const continue_3 = new Continue3();
    const continue_4 = new Continue4();
    const terms_condition = new TermsandConditions();
    const continue_5 = new Continue5();
    const con_ord = new ConfirmOrder();
    const MyAccount = new myaccount();
    const myaccount1 = new MYACCOUNT1();
    const myaccount2 = new MYACCOUNT2();
    const Add_Cart = new AddToCart2();
    const brand_1 = new Brand();
    const brand_name = new BrandName();

    
    
    it('tests', () => {

        Login_p.EnterURL();
        Login_p.login();
        //Search_Field.EnterURL();
       // Login_p.login();
        //Link_po.linkclick('login');
        Search_Field.Search();
        cy.wait(4000);
        //Link_po.linkclick('HP LP3065')
        addtocart.addproduct();
        shop_cart.shopping();
        check_out_link.check_out();
        continue_1.continue_first();
        continue_2.continue_second();
        continue_3.continue_second();
        continue_4.continue_fourth();
        terms_condition.termscondition();
        continue_5.continue_fifth();
        con_ord.confirm_order();
        MyAccount.my_account();
        myaccount1.MY_ACCOUNT();
        myaccount2.MY_ACCOUNT2();
        Add_Cart.Cart_2();
        brand_1.brand();
        brand_name.brandname;
        
        
        //Link_po.linkclick('Add to Cart')
        //Link_po.linkclick('Shopping Cart')
        
    });
    

    


        
    
});