import NavLink from 'umi/navlink';
import {Container, Divider, Flag, Icon, Image, List, Menu, Segment} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import styles from "./index.less";
import React from "react";
import {lang, t, languages} from "../utils/languages";

export default class Layout extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      language: localStorage.getItem("language") || "en-US",
    }
  }
  render() {
    const currentLang = languages[lang()];
    return (
      <div>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              <Image
                size='mini'
                src='https://puchi-xet.loveliv.es/sprawlpict/sprawlpict10003101.png'
                style={{marginRight: '1.5em'}}

              />
              Puchibase v2
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/titles" activeClassName={styles.activeLink}>
                {t(["wording", "menu", "titles"])}
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/puchies" activeClassName={styles.activeLink}>
                {t(["wording", "menu", "puchies"])}
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/cards" activeClassName={styles.activeLink}>
                {t(["wording", "menu", "cards"])}
              </NavLink>
            </Menu.Item>
          </Container>
        </Menu>

        <Container style={{marginTop: '3em'}}>
          {React.cloneElement(this.props.children, { language: this.state.language })}
        </Container>

        <Segment inverted vertical style={{margin: '5em 0em 0em', padding: '5em 0em'}}>
          <Container textAlign='center'>
            <List horizontal inverted divided link>
              <List.Item as='a' href='https://ur.mk/'>
                Another ieb Project
              </List.Item>
              <List.Item as='a' href='https://github.com/iebb/Puchibase2'>
                <Icon name='github'/> Github
              </List.Item>
              <List.Item as='a' href='mailto:ieb@outlook.my'>
                Contact Me
              </List.Item>
            </List>
            <Divider/>
            <List horizontal inverted divided link>
              {
                Object.keys(languages).map(x => (
                  <List.Item as='a' key={x} onClick={() => {
                    localStorage.setItem("language", x);
                    this.setState({language: x})
                  }}><Flag name={languages[x].meta.flag}/></List.Item>
                ))
              }
            </List>
            <Divider/>
            <p>{currentLang.meta.language} by {currentLang.meta.translator}</p>
          </Container>
        </Segment>
      </div>

    );
  }
}
