import { useEffect, useState } from "react";
import { Button } from "../../atomo/Button/button";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

interface mediasProps {
  link: string;
  name: string;
}

export const ButtonGroup = () => {
  const [medias, setMedias] = useState<mediasProps[]>([]);

  useEffect(() => {
    fetch("/social_medias.json")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setMedias(dados);
      })

      .catch((error) => {
        console.log("Erro ao ler a API: ", error);
      });
  }, []);

  return (
    <div className="socialMedias w-[45%] grid grid-cols-2 gap-4">
      {medias.map((socialMedia) => (
        <Button
          color="azulClaro"
          size="small"
          type="mediaIcon"
          id={socialMedia.name}
        >
          <a href={socialMedia.link} target="_blank">
            {socialMedia.name === "Github" ? 
            ( <FaGithub />) : socialMedia.name === "Instagram" ? 
            (<FaInstagram />) : socialMedia.name === "Whatsapp" ? 
            (<FaWhatsapp />) : socialMedia.name === "Email" ? 
            (<IoMdMail />) : ""
            }
          </a>
        </Button>
      ))}
    </div>
  );
};
