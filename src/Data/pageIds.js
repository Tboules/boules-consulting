const pageIds = [
  {
    "node": {
      "title": "Test",
      "id": "cG9zdDo0Mjk="
    }
  },
  {
    "node": {
      "title": "Nonprofit Startup",
      "id": "cG9zdDozMTA="
    }
  },
  {
    "node": {
      "title": "For Nonprofits",
      "id": "cG9zdDo4NA=="
    }
  },
  {
    "node": {
      "title": "Copywriting Packages",
      "id": "cG9zdDo4MA=="
    }
  },
  {
    "node": {
      "title": "Contact",
      "id": "cG9zdDoyMg=="
    }
  },
  {
    "node": {
      "title": "Services",
      "id": "cG9zdDoyMA=="
    }
  },
  {
    "node": {
      "title": "About Us",
      "id": "cG9zdDoxNw=="
    }
  },
  {
    "node": {
      "title": "Home",
      "id": "cG9zdDoxNQ=="
    }
  }
]

const idObj = pageIds.reduce((acc, obj) => {
   acc[obj.node.title] = obj.node.id
   return acc
}, {})

const idArr = pageIds.map(n => n.node)

console.log(idArr)