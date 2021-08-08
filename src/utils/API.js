import axios from 'axios';

    function getProps() {
        return axios.get('https://floating-brushlands-57576.herokuapp.com/api/properties');
    }

    function deleteProp(id) {
        return axios.delete('https://floating-brushlands-57576.herokuapp.com/api/properties/' + id);
    }

    export {getProps, deleteProp};
