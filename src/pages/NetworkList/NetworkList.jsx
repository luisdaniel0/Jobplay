import { useState, useEffect } from 'react'
import * as networkService from '../../services/networkService'
import { Col, Card, Container, Row, ButtonGroup, Button } from 'react-bootstrap';
import AddNetworkBtn from '../../components/AddNetworkBtn/AddNetworkBtn';
import './NetworkList.css'
import { getProfile } from "../../services/Profile";
import { useSelector } from 'react-redux'


const NetworkList = () => {
  const [networks, setNetworks] = useState([])
  const [networkFilter, setNetworkFilter] = useState('all')
  const [profile, setProfile] = useState({});
  const { user } = useSelector((state) => state.auth)

  const handleaddnetwork = async (networkData) => {
    const newNetwork  = await networkService.create(networkData)
    setNetworks([newNetwork, ...networks])
  }

  const getTimeDifference = (date) => {
    const now = new Date();
    const createdDate = new Date(date);
    const diffInSeconds = Math.floor((now - createdDate) / 1000);
    const days = Math.floor(diffInSeconds / 86400);
    const hours = Math.floor(diffInSeconds / 3600) % 24;
    const minutes = Math.floor(diffInSeconds / 60) % 60;
    const seconds = diffInSeconds % 60;
  
    return { days, hours, minutes, seconds };
  };
    const fetchProfile = async () => {
      const profile = await getProfile(user.profile);
      setProfile(profile);
    };

  useEffect(() => {
    const fetchAllNetworks = async () => {
      const data = await networkService.index()
      setNetworks(data)
    }
    fetchAllNetworks()
    fetchProfile();

  }, [])
  
  const loaded = () => {

    let filteredNetwork = networks;

    
  if (networkFilter === 'events') {
        filteredNetwork = filteredNetwork.filter((network) => network?.eventName)
    } else if (networkFilter === 'people') {
      filteredNetwork = filteredNetwork.filter((network) => network?.connection[0])
    }

    console.log(filteredNetwork);
    console.log(networks)
    console.log(profile)

    let allNetworks = filteredNetwork.map(network => {
      return (
      <div key={network._id} className="network-card">
      <Card>
        <Card.Body>
          <Card.Title>
            { networkFilter === "events" ? null : <h1>{network?.connection[0]?.name}</h1>}
          </Card.Title>
          <Card.Title>
          { networkFilter === "events" ? null : <h1>{network?.connection[0]?.company}</h1>}
          { networkFilter === "events" ? null : <h1>{network?.connection[0]?.title}</h1>}
          </Card.Title>
          <Card.Title>
          { networkFilter === "events" ? <h1>{network?.eventName}</h1> : null}
          { networkFilter === "people" || networkFilter === "events" ? null : <h1>{network?.eventName}</h1>}
          </Card.Title>
          <Card.Text className='text-muted'>
            Added {(() => {
              const {days, hours, minutes } = getTimeDifference(network.createdAt)
                if (days === 1) return `Added ${days} day ago`
                if (days > 1) return `Added ${days} day ago`
                if (hours) return `Added ${hours} hours ago`
                return `Added ${minutes} minutes ago`
            })()}
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      )
    })


    return (
      <>
        {allNetworks}
      </>
    )
  }

  const loading = () => {
    return (
      <div>
        You haven't networked just yet...
      </div>
    )
  }

  console.log(networkFilter);

  return (
    <div className='network-container'>
      <Container>
        <div className="header-container w-100">
          <Row>
            <Col>
              <h1 className="network-header">Network</h1>
            </Col>
          </Row>
          <Row className="filter-row">
            <Col>
            <ButtonGroup>
              <button
                onClick={() => setNetworkFilter('all')}
                className={`pill-button justify-content-center ${networkFilter === 'all' ? 'active' : ''}`}
              >
                All
              </button>
              <button
                onClick={() => setNetworkFilter('people')}
                className={`pill-button justify-content-center ${networkFilter === 'people' ? 'active' : ''}`}
              >
                People
              </button>
              <button
                onClick={() => setNetworkFilter('events')}
                className={`pill-button justify-content-center ${networkFilter === 'events' ? 'active' : ''}`}
              >
                Events
              </button>
            </ButtonGroup>
            </Col>
            <Col className="d-flex justify-content-end">
              <AddNetworkBtn handleaddnetwork={handleaddnetwork} />
            </Col>
          </Row>
        </div>
        <Row>{networks ? loaded() : loading()}</Row>
      </Container>
    </div>
  )
}

export default NetworkList