import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './CertificateStyle';
import CertificateCard from '../Cards/CertificateCard'
import { certificates } from '../../data/constants'


const Certificates = ({openCertificate,setOpenCertificate}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Certificates</Title>
        <Desc>
        obtained certificates.
        </Desc>
        <CardContainer>
          {toggle === 'all' && certificates
            .map((certificate) => (
              <CertificateCard certificate={certificate} openCertificate={openCertificate} setOpenCertificate={setOpenCertificate}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Certificates