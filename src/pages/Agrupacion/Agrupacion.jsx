import GroupImage from "../../componets/Group/GroupImage/GroupImage";
import GroupMisionVision from "../../componets/Group/GroupMisionVision/GroupMisionVision";
const Agrupacion = () => {
  return (
    <>
    <GroupImage groupImg="https://via.placeholder.com/1000x400" altImg="Imagen de grupo" groupName="Nombre del grupo" />
    <GroupMisionVision 
    groupMision="Misión del grupo     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi voluptatum at obcaecati beatae sit tenetur ducimus nam mollitia! A ullam neque asperiores assumenda debitis suscipit exercitationem consequatur totam ratione. Nisi!" 
    groupVision="Visión del grupo     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi voluptatum at obcaecati beatae sit tenetur ducimus nam mollitia! A ullam neque asperiores assumenda debitis suscipit exercitationem consequatur totam ratione. Nisi!" />

    </>
  )
}

export default Agrupacion