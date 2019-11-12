import React, { Component } from 'react';
import Landing from './index';

class LandingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null
    };
  }

  imageClicked = index => {
    this.setState({ active: index });
  };

  handleClose = () => {
    this.setState({ active: null });
  };

  handleArr = side => {
    const { active } = this.state;
    this.setState({ active: side === 'L' ? active - 1 : active + 1 });
  };

  render() {
    const { active } = this.state;
    return (
      <Landing
        bgimg="/assets/bgimage_test.jpg"
        title="Adventure in the desert"
        country="Utah"
        continent="America"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar molestie velit id hendrerit. Maecenas ligula nulla, accumsan nec dapibus sed, pellentesque quis sapien. Fusce malesuada lectus neque, id fringilla velit scelerisque sed. Duis et sem ac risus dictum lobortis a a odio. Etiam sit amet ligula placerat, suscipit erat et, auctor magna. Praesent blandit quam in elit tincidunt gravida. Pellentesque posuere ac metus id dictum. Curabitur tempor ac turpis id pellentesque. Nullam sed turpis eu sapien vulputate vehicula. Duis ligula lorem, accumsan sit amet laoreet ut, aliquam in nibh. Pellentesque bibendum, lectus sed euismod fringilla, augue est egestas mi, at semper ipsum elit ut velit. Etiam et odio congue, pharetra turpis ac, bibendum ante.Nulla sit amet euismod sem, a mollis arcu. Nullam finibus, lorem quis lobortis tempor, enim ligula suscipit eros, eget tempor sapien odio id ante. Fusce quis quam blandit, tempus justo sit amet, egestas massa. Vestibulum tortor leo, porta sit amet urna ac, efficitur auctor velit. In condimentum placerat mattis. Proin feugiat commodo velit, a placerat enim varius et. Mauris fringilla finibus nunc eu volutpat. Pellentesque congue vitae velit id vestibulum. Ut consectetur ipsum aliquet, sodales purus eget, bibendum tortor. Quisque efficitur interdum ultricies. Duis suscipit neque sed diam ullamcorper bibendum.Etiam in sem dictum erat iaculis vehicula. Nullam faucibus id elit in dignissim. Mauris sed auctor lorem, pharetra cursus velit. Donec suscipit elit dui, eu porta felis pulvinar et. Aenean tempus libero ut lorem mollis, id pretium ante tempus. Nulla placerat sed risus vel vulputate. Maecenas molestie fermentum orci, in venenatis diam dictum sit amet. Nam blandit at mauris non blandit. Ut interdum ante eget mollis rhoncus. Nulla venenatis dolor lacinia porta egestas. Nunc ac facilisis sapien, porta varius urna. Nullam ac pellentesque quam, ut tempor justo.Curabitur ac tristique dui. Maecenas enim ex, fermentum eu dui vitae, blandit pharetra mi. Duis eu ipsum laoreet, congue ligula eget, sodales neque. Suspendisse non posuere tellus. Nunc id maximus sapien, interdum tempus arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque bibendum interdum felis, non consequat metus pharetra in. Donec et scelerisque augue. Etiam facilisis ex ut vulputate mattis. Praesent eros felis, euismod id porta ut, venenatis suscipit erat. Aliquam interdum felis et erat ullamcorper tincidunt. Vestibulum sed enim feugiat, placerat nulla at, pharetra justo. Mauris cursus ex a pharetra fringilla. Maecenas erat sem, ullamcorper nec ultrices et, congue sed tellus.Donec eu tristique dui, et consequat sapien. Integer arcu nunc, imperdiet id diam quis, pretium ullamcorper massa. Curabitur ultrices augue vitae urna accumsan, non posuere odio aliquet. Sed a odio metus. Fusce ut gravida enim. Morbi sed pretium tortor, sit amet sollicitudin enim. Etiam nisl orci, dignissim sit amet maximus ac, fringilla eu lectus. Pellentesque eget enim libero. Integer gravida eros eget mollis interdum. Pellentesque non posuere sem, ultricies gravida massa. Sed neque urna, ullamcorper sed sem non, cursus vehicula neque. Donec luctus purus metus, ac dapibus ante pretium vitae."
        imagesCarrousel={[
          '/assets/carrousel/carr1.jpg',
          '/assets/carrousel/carr2.jpg',
          '/assets/carrousel/carr3.jpg',
          '/assets/carrousel/carr4.jpg',
          '/assets/carrousel/carr5.jpg',
          '/assets/carrousel/carr6.jpg'
        ]}
        imageClicked={this.imageClicked}
        active={active}
        handleClose={this.handleClose}
        handleArr={this.handleArr}
      />
    );
  }
}

export default LandingContainer;
