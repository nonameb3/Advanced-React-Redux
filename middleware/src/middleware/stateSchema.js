const schema = {
  "definitions": {},
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://example.com/root.json",
  "type": "object",
  "title": "The Root Schema",
  "required": [
    "comment",
    "auth"
  ],
  "properties": {
    "comment": {
      "$id": "#/properties/comment",
      "type": "array",
      "title": "The Comment Schema",
      "items": {
        "$id": "#/properties/comment/items",
        "type": "string",
        "title": "The Items Schema",
        "default": "",
        "examples": [
          "comment1",
          "comment2"
        ],
        "pattern": "^(.*)$"
      }
    },
    "auth": {
      "$id": "#/properties/auth",
      "type": "boolean",
      "title": "The Auth Schema",
      "default": false,
      "examples": [
        true
      ]
    }
  }
};

export default schema;