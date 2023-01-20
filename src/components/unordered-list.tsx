import { AnyCnameRecord } from "dns"

export const UnorderedList = (props: {
  namesList: String[];
}) => {

  return (
    <ul>
      {
        props.namesList.map((name, index) => {
          return (
            <li key={index}>
              <span>Name: {name} </span>
            </li>
          )
        })
      }
    </ul>
  )
}