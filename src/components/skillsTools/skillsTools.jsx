import './skillsTools.css'

function SkillsTools({img, alt}) {
    return (
            <article className='SkillsToolsArticle'>
                <img src={img} alt={alt} />
            </article>
    )
}

export default SkillsTools;