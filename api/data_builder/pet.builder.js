
 class PetBuilder {
     getPet(
      categoryName,
      name,
      photoUrls,
      tagsName,
      status
    ){
      return {
        "category": {
          "id": 1723123124312, // in real project we can't manage id of some category 
          "name": categoryName
        },
        name,
        "photoUrls": [
          photoUrls
        ],
        "tags": [
          {
            "id": 12323789432, // in real project we can't manage id of some tags 
            "name": tagsName
          }
        ],
        "status": status
      }
    }
}

export default new PetBuilder()