import Section from './Section'
import { Accordion } from 'react-bootstrap';

const SectionList = ({ sections, updateSection, deleteSection }) => {

    return (
        <Accordion defaultActiveKey="0">
            {
                sections.map((section, index) => (
                    <Section section={section} index={index} updateSection={updateSection} deleteSection={deleteSection} />
                ))
            }
        </Accordion>
    )
}

export default SectionList
