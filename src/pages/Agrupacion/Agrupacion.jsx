import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import GroupFeedbackMembers from "../../components/Group/GroupFeedbackMembers/GroupFeedbackMembers";
import GroupImage from "../../components/Group/GroupImage/GroupImage";
import GroupMisionVision from "../../components/Group/GroupMisionVision/GroupMisionVision";
import JoinGroup from "../../components/Group/JoinGroup/JoinGroup";
import { connectStorageEmulator } from "@firebase/storage";
import { addCommentToGroup } from "../../data/services/groups";

const Agrupacion = () => {
  const { groupToShow, setGroupToShow, user } = useContext(UserContext);
  if (!groupToShow) {
    return <div>Cargando...</div>;
  }
  const {
    nombre: name,
    year,
    mision,
    vision,
    instagram,
    img: imageName,
    imgYear: imageYear,
    imgForm: imageLogo,
    email,
    comments,
    integrantes,
  } = groupToShow;

  const groupMision =
    mision ||
    "Misión del grupo     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi voluptatum at obcaecati beatae sit tenetur ducimus nam mollitia! A ullam neque asperiores assumenda debitis suscipit exercitationem consequatur totam ratione. Nisi!";
  const groupVision =
    vision ||
    "Visión del grupo     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi voluptatum at obcaecati beatae sit tenetur ducimus nam mollitia! A ullam neque asperiores assumenda debitis suscipit exercitationem consequatur totam ratione. Nisi!";

    const onAddComment = async (comment) => {
      if (!name || !user?.displayName || !comment) return;
      await addCommentToGroup(name, user?.displayName, comment);
      
      setGroupToShow(prevGroup => ({
          ...prevGroup,
          comments: [...prevGroup.comments, {
              user: user?.displayName,
              comment: comment,
              date: new Date().toISOString().slice(0, 10),
          }]
      }));
  };

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

      <GroupFeedbackMembers
        messages={comments}
        members={integrantes}
        onAddComment={onAddComment}
      />
    </>
  );
};

export default Agrupacion;
