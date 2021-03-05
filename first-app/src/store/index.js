import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      memories: [
        {
          id: "o1",
          image: "https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg",
          title: "Punta sa OLO-OLO",
          description: "Nadadaanan papuntang malbrigo",
        },
        {
          id: "o2",
          image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGljdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
          title: "Lakad sa Locloc",
          description: "Hinabol pa ng aso",
        },
        {
          id: "o3",
          image: "https://www.nhm.ac.uk/content/dam/nhmwww/discover/wpy-2020-winning-images/wpy-winning-image-full-width.jpg",
          title: "Gala with King",
          description: "kung saan saan",
        },
      ],
    };
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.image,
        description: memoryData.description
      };
      state.memories.unshift(newMemory);
    }
  },
  actions: {
    addMemory(context, memoryData) {
      context.commit('addMemory', memoryData);
    }
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
});

export default store;
