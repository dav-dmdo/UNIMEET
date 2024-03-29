import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import GroupFeedbackMembers from "../../components/Group/GroupFeedbackMembers/GroupFeedbackMembers";
import GroupImage from "../../components/Group/GroupImage/GroupImage";
import GroupMisionVision from "../../components/Group/GroupMisionVision/GroupMisionVision";
import JoinGroup from "../../components/Group/JoinGroup/JoinGroup";
const Agrupacion = () => {
  const { groupToShow } = useContext(UserContext);
  const {
    nombre: name,
    year,
    mision,
    vision,
    instagram,
    img: imageName,
    img: imageYear,
    img: imageLogo,
    email,
  } = groupToShow;
  const groupMision =
    mision ||
    "Misión del grupo     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi voluptatum at obcaecati beatae sit tenetur ducimus nam mollitia! A ullam neque asperiores assumenda debitis suscipit exercitationem consequatur totam ratione. Nisi!";
  const groupVision =
    vision ||
    "Visión del grupo     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi voluptatum at obcaecati beatae sit tenetur ducimus nam mollitia! A ullam neque asperiores assumenda debitis suscipit exercitationem consequatur totam ratione. Nisi!";

  const messages = [
    { sender: "Alice", content: "Hola, ¿cómo estás?", timestamp: "10:00 AM" },
    {
      sender: "Bob",
      content: "¡Hola Alice! Estoy bien, ¿y tú?",
      timestamp: "10:05 AM",
    },
    {
      sender: "Alice",
      content: "Yo también estoy bien, gracias.",
      timestamp: "10:10 AM",
    },
    { sender: "Alice", content: "Hola, ¿cómo estás?", timestamp: "10:00 AM" },
    {
      sender: "Bob",
      content: "¡Hola Alice! Estoy bien, ¿y tú?",
      timestamp: "10:05 AM",
    },
    {
      sender: "Alice",
      content: "Yo también estoy bien, gracias.",
      timestamp: "10:10 AM",
    },
    { sender: "Alice", content: "Hola, ¿cómo estás?", timestamp: "10:00 AM" },
    {
      sender: "Bob",
      content: "¡Hola Alice! Estoy bien, ¿y tú?",
      timestamp: "10:05 AM",
    },
    {
      sender: "Alice",
      content: "Yo también estoy bien, gracias.",
      timestamp: "10:10 AM",
    },
    { sender: "Alice", content: "Hola, ¿cómo estás?", timestamp: "10:00 AM" },
    {
      sender: "Bob",
      content: "¡Hola Alice! Estoy bien, ¿y tú?",
      timestamp: "10:05 AM",
    },
    {
      sender: "Alice",
      content: "Yo también estoy bien, gracias.",
      timestamp: "10:10 AM",
    },
    { sender: "Alice", content: "Hola, ¿cómo estás?", timestamp: "10:00 AM" },
    {
      sender: "Bob",
      content: "¡Hola Alice! Estoy bien, ¿y tú?",
      timestamp: "10:05 AM",
    },
    {
      sender: "Alice",
      content: "Yo también estoy bien, gracias.",
      timestamp: "10:10 AM",
    },
    { sender: "Alice", content: "Hola, ¿cómo estás?", timestamp: "10:00 AM" },
    {
      sender: "Bob",
      content: "¡Hola Alice! Estoy bien, ¿y tú?",
      timestamp: "10:05 AM",
    },
    {
      sender: "Alice",
      content: "Yo también estoy bien, gracias.",
      timestamp: "10:10 AM",
    },
  ];

  const members = [
    {
      name: "Alice",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Bob",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Charlie",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "David",
      img: "",
    },
    {
      name: "Eve",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Alice",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Bob",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Charlie",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "David",
      img: "",
    },
    {
      name: "Eve",
      img: "https://via.placeholder.com/150",
    },
  ];
  return (
    <>
      <GroupImage
        groupImg={imageName || "https://via.placeholder.com/1000x400"}
        altImg="Imagen de grupo"
        text={name || "Nombre del grupo"}
        color="black"
      />

      <GroupMisionVision groupMision={groupMision} groupVision={groupVision} />

      <GroupImage
        groupImg={imageYear || "https://via.placeholder.com/1000x400"}
        altImg="Imagen de grupo"
        text={`Fundado en ${year || "2020"}`}
        color="orange"
      />

      <JoinGroup
        groupImg={imageLogo || "https://via.placeholder.com/300x300"}
        groupEmail={email || "correodeejemplo@gmail.com"}
        groupIg={instagram || "@igejemplo"}
      />

      <GroupFeedbackMembers messages={messages} members={members} />
    </>
  );
};

export default Agrupacion;
