import React, {Component} from 'react';
const Translate = require('react-i18nify').Translate;

export default class NewsletterForm extends Component{
   

  render(){
    return (
        <div id="mc_embed_signup">
            <form action="//startupweekend.us6.list-manage.com/subscribe/post?u=c5cf01f90d4c0de9181c43d79&amp;id=dd94269eb6" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll">
            
            <div className="mc-field-group">
                <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL"/>
                <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" ><Translate value="newsletter_form_subscribe" dangerousHTML={true}/></button>
                </div>

            </div>
            <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{display:'none'}}></div>
                <div className="response" id="mce-success-response" style={{display:'none'}}></div>
            </div>
                <div style={{position: 'absolute', left: '-5000px'}}>
                <input type="text" name="b_c5cf01f90d4c0de9181c43d79_dd94269eb6" tabIndex="-1" value=""/>
                </div>
                <div className="clear mc-submit">
                </div>
            </form>
        </div>

    );
  };
}