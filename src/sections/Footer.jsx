import { mail, instagram, linkin } from "../assets";

const Footer = () => {
  return (
    <footer
      className=" bg-black text-lightGray font-space px-5 py-10 "
      id="contact"
    >
      <h5 className="text-4xl text-orange">Contact me:</h5>
      <div>
        <img src={mail} alt="e-mail" width={40} height={40} />
        <p>arturobc95@gmail.com</p>
      </div>
      <p>Copyright © 2023. All rights are reserved</p>
      <p>Designed by Arturo Baylon💻</p>

      <div className="flex">
        <a href="https://www.instagram.com/arturo.baylon/">
          <img src={instagram} alt="instagram" width={40} height={40} />
        </a>
        <a href="https://www.linkedin.com/in/arturo-baylon-931689277/">
          <img src={linkin} alt="link" width={40} height={40} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
