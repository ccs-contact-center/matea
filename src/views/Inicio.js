import React, { Component } from 'react'
import { Card, CardFooter } from 'reactstrap'
import withAuth from '../services/withAuth'
//import { connect } from 'react-redux';
//import { addProfile, setCampaign, darkTheme,setAvatar } from '../../Redux/Actions/profile';
import Navegador from './temarioViews/ComponentsNavTemari/Navegador'
import BienvenidaView from './temarioViews/BienvenidaView'
import IntroduccionView from './temarioViews/IntroduccionView'
import TemaUnoView from './temarioViews/TemaUnoView'
import TemaDosView from './temarioViews/TemaDosView'
import TemaTresView from './temarioViews/TemaTresView'
import TemaCuatroView from './temarioViews/TemaCuatroView'
import TemaCincoView from './temarioViews/TemaCincoView'
import TemaSeisView from './temarioViews/TemaSeisView'
import TemaSieteView from './temarioViews/TemaSieteView'
import TemaOchoView from './temarioViews/TemaOchoView'
import TemaNueveView from './temarioViews/TemaNueveView'
import Actividad1View from './temarioViews/Actividad1View'
import TemaOnceView from './temarioViews/TemaOnceView'
import TemaDoceView from './temarioViews/TemaDoceView'
import TemaTreceView from './temarioViews/TemaTreceView'
//  import TemaCatorceView from './temarioViews/TemaCatorceView'



import Fin from './temarioViews/Fin'
import Formulario2View from './temarioViews/formulario2View'

//import RecapitulacionView from './temarioViews/RecapitulacionView'

class Inicio extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )
  state = {
    index: 0,
  }
  constructor() {
    super()
    this.setIndex = this.setIndex.bind(this)
  }

  setIndex(index) {
    this.setState({
      index: index,
    })
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
        {this.state.index === 0 ? (
            <BienvenidaView />
          ) : this.state.index === 1 ? (
            <IntroduccionView />
          ) : this.state.index === 2 ? (
            <TemaUnoView />
          ) : this.state.index === 3 ? (
            <TemaDosView />
          ) : this.state.index === 4 ? (
            <TemaTresView />
          ) : this.state.index === 5 ? (
            <TemaCuatroView />
          ) : this.state.index === 6 ? (
            <TemaCincoView />
          ) : this.state.index === 7 ? (
            <TemaSeisView />
          ) : this.state.index === 8 ? (
            <TemaSieteView />
          ) : this.state.index === 9 ? (
            <TemaOchoView />
          ) : this.state.index === 10 ? (
            <TemaNueveView />
          ) : this.state.index === 11 ? (
            <Actividad1View />
          ) : this.state.index === 12 ? (
            <TemaOnceView />
          ) : this.state.index === 13 ? (
            <TemaDoceView />
          ) : this.state.index === 14 ? (
            <TemaTreceView />
          ) : this.state.index === 15 ? (
            <Fin />
          ) : this.state.index === 16 ? (
            <Formulario2View />
          ) : null}
          <br />
          <CardFooter>
            <Navegador handleNavigation={this.setIndex} maxIndex={16} />
          </CardFooter>
        </Card>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     profile: state.profile.profile,
//     campaign: state.campaign.campaign,
//     darkTheme: state.darkTheme.darkTheme
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     addProfile: (name) => {
//       dispatch(addProfile(name))
//     },
//     setCampaign: (id) => {
//       dispatch(setCampaign(id))
//     },
//     darkTheme: (isDarkTheme) => {
//       dispatch(darkTheme(isDarkTheme))
//     },
//     setAvatar: (data) => {
//       dispatch(setAvatar(data))
//     }

//   }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Inicio));
export default withAuth(Inicio)
