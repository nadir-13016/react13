import React, { Component } from 'react';
import axios from 'axios';



class ForEmployee extends Component {
    constructor(props){
        super(props);
        this.state = {
          title: '',
          link: '',
          comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }
      submitForm(e) {
        e.preventDefault();

            const url = 'https://post-a-form.herokuapp.com/api/movies/';
            axios.post(url, this.state)
            .then(res => res.data)
            .then(res => {
            alert(`Employé ajouté avec l'ID ${res.id} !`);
            })
            .catch(e => {
            console.error(e);
            alert(`Erreur lors de l'ajout d'un film : ${e.message}`);
}           );


      }
    render () {
        return(
            <div className="FormEmployee">
  <h1>Movie </h1>

  <form onSubmit={this.submitForm}>
    <fieldset>
      <legend>Movie</legend>
      <div className="form-data">
        <label htmlFor="title">Nom</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={this.onChange}
          value={this.state.title}
        />
      </div>

      <div className="form-data">
        <label htmlFor="link">Poster Link</label>
        <input
          type="text"
          id="link"
          name="link"
          onChange={this.onChange}
          value={this.state.link}
        />
      </div>

      <div className="form-data">
        <label htmlFor="comment">Comment</label>
        <textarea
          type="textarea"
          id="comment"
          name="comment"
          onChange={this.onChange}
          value={this.state.comment}
        />
      </div>
      <hr />
      <div className="form-data">
        <input type="submit" value="Envoyer" />
      </div>
    </fieldset>
  </form>
</div>

        )
    }

}

export default ForEmployee;