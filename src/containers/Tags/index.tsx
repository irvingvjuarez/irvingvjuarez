interface TagsProps {
  data: Array<string>
}

const Tags: React.FC<TagsProps> = ({ data }): JSX.Element => {
  return(
    <div className="tags">
      {data.map(item => (
        <span key={item}>{item}</span>
      ))}
    </div>
  )
}

export { Tags }