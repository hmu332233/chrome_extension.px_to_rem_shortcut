export default {
  "reactClassComponent": {
    "prefix": "rcc",
    "body": "import React, { Component } from 'react';\n\nclass ${1:${TM_FILENAME_BASE}} extends Component {\n\trender() {\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t$0\n\t\t\t</div>\n\t\t);\n\t}\n}\n\nexport default ${1:${TM_FILENAME_BASE}};",
    "description": "Creates a React component class with ES6 module system"
  },

  "reactReduxComponent": {
    "prefix": "rrc",
    "body": "import React, { Component } from 'react';\nimport { connect } from 'react-redux';\n\nfunction mapStateToProps(state) {\n\treturn {\n\n\t};\n}\n\nclass ${1:${TM_FILENAME_BASE}} extends Component {\n\trender() {\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t$0\n\t\t\t</div>\n\t\t);\n\t}\n}\n\nexport default connect(\n\tmapStateToProps,\n)(${1:${TM_FILENAME_BASE}});",
    "description": "Creates a React component class connected to redux"
  },

  "reactJustClassComponent": {
    "prefix": "rcjc",
    "body": "class ${1:${TM_FILENAME_BASE}} extends Component {\n\trender() {\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t$0\n\t\t\t</div>\n\t\t);\n\t}\n}\n",
    "description": "Creates a React component class with ES6 module system"
  },

  "reactClassComponentPropTypes": {
    "prefix": "rccp",
    "body": "import React, { Component } from 'react';\nimport PropTypes from 'prop-types';\n\nclass ${1:${TM_FILENAME_BASE}} extends Component {\n\trender() {\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t$0\n\t\t\t</div>\n\t\t);\n\t}\n}\n\n${1:${TM_FILENAME_BASE}}.propTypes = {\n\n};\n\nexport default ${1:${TM_FILENAME_BASE}};",
    "description": "Creates a React component class with PropTypes and ES6 module system"
  },

  "reactClassComponentWithMethods": {
    "prefix": "rcfc",
    "body": "import React, { Component } from 'react';\nimport PropTypes from 'prop-types';\n\nclass ${1:${TM_FILENAME_BASE}} extends Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\n\t}\n\n\tcomponentWillMount() {\n\n\t}\n\n\tcomponentDidMount() {\n\n\t}\n\n\tcomponentWillReceiveProps(nextProps) {\n\n\t}\n\n\tshouldComponentUpdate(nextProps, nextState) {\n\n\t}\n\n\tcomponentWillUpdate(nextProps, nextState) {\n\n\t}\n\n\tcomponentDidUpdate(prevProps, prevState) {\n\n\t}\n\n\tcomponentWillUnmount() {\n\n\t}\n\n\trender() {\n\t\treturn (\n\t\t\t<div>\n\n\t\t\t</div>\n\t\t);\n\t}\n}\n\n${1:${TM_FILENAME_BASE}}.propTypes = {\n\n};\n\nexport default ${1:${TM_FILENAME_BASE}};",
    "description": "Creates a React component class with PropTypes and all lifecycle methods and ES6 module system"
  },

  "reactWithWebpackDefaults": {
    "prefix": "rwwd",
    "body": "class ${1:${TM_FILENAME_BASE}} extends React.Component {\n\tconstructor(props) {\n\t\tsuper(props);\n\n\t\tthis.state = {};\n\n\t}\n\n\trender() {\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t$0\n\t\t\t</div>\n\t\t);\n\t}\n}\n\n${1:${TM_FILENAME_BASE}}.propTypes = {\n\n};\n\nexport default ${1:${TM_FILENAME_BASE}};",
    "description": "Creates a React component class with constructor, empty state, proptypes and export in ES6 module system without imports. (Mostly used when React, Proptypes are provided by webpack provide plugin)"
  },

  "reactPureComponent": {
    "prefix": "rpc",
    "body": "import React, { PureComponent } from 'react';\nimport PropTypes from 'prop-types';\n\nclass ${1:${TM_FILENAME_BASE}} extends PureComponent {\n\trender() {\n\t\treturn (\n\t\t\t<div>\n\t\t\t\t$0\n\t\t\t</div>\n\t\t);\n\t}\n}\n\n${1:${TM_FILENAME_BASE}}.propTypes = {\n\n};\n\nexport default ${1:${TM_FILENAME_BASE}};",
    "description": "Creates a React pure component class with PropTypes and ES6 module system"
  },

  "reactStateless": {
    "prefix": "rsc",
    "body": "import React from 'react';\n\nconst ${1:${TM_FILENAME_BASE}} = () => {\n\treturn (\n\t\t<div>\n\t\t\t$0\n\t\t</div>\n\t);\n};\n\nexport default ${1:${TM_FILENAME_BASE}};",
    "description": "Creates a stateless React component without PropTypes and ES6 module system"
  },
  "reactStatelessProps": {
    "prefix": "rscp",
    "body": "import React from 'react';\nimport PropTypes from 'prop-types';\n\nconst ${1:${TM_FILENAME_BASE}} = props => {\n\treturn (\n\t\t<div>\n\t\t\t\n\t\t</div>\n\t);\n};\n\n${1:${TM_FILENAME_BASE}}.propTypes = {\n\t$0\n};\n\nexport default ${1:${TM_FILENAME_BASE}};",
    "description": "Creates a stateless React component with PropTypes and ES6 module system"
  },
  "reactStatelessFunction": {
    "prefix": "rsf",
    "body": "import React from 'react';\n\nfunction ${1:${TM_FILENAME_BASE}(props) {\n\treturn (\n\t\t<div>\n\t\t\t\n\t\t</div>\n\t);\n}\n\nexport default ${1:${TM_FILENAME_BASE}};",
    "description": "Creates a stateless React component as a named function without PropTypes"
  },
  "reactStatelessFunctionProps": {
    "prefix": "rsfp",
    "body": "import React from 'react';\nimport PropTypes from 'prop-types';\n\n${1:${TM_FILENAME_BASE}}.propTypes = {\n\t$0\n};\n\nfunction ${1:${TM_FILENAME_BASE}(props) {\n\treturn (\n\t\t<div>\n\t\t\t\n\t\t</div>\n\t);\n}\n\nexport default ${1:${TM_FILENAME_BASE}};",
    "description": "Creates a stateless React component as a named function with PropTypes"
  },

  "classConstructor": {
    "prefix": "con",
    "body": "constructor(props) {\n\tsuper(props);\n\t$0\n}\n",
    "description": "Adds a default constructor for the class that contains props as arguments"
  },
  "classConstructorContext": {
    "prefix": "conc",
    "body": "constructor(props, context) {\n\tsuper(props, context);\n\t$0\n}\n",
    "description": "Adds a default constructor for the class that contains props and context as arguments"
  },

  "emptyState": {
    "prefix": "est",
    "body": "this.state = {\n\t$1\n};",
    "description": "Creates empty state object. To be used in a constructor."
  },

  "componentWillMount": {
    "prefix": "cwm",
    "body": "\ncomponentWillMount() {\n\t$0\n}\n",
    "description": "Invoked once, both on the client and server, immediately before the initial rendering occurs"
  },

  "componentDidMount": {
    "prefix": "cdm",
    "body": "componentDidMount() {\n\t$0\n}\n",
    "description": "Invoked once, only on the client (not on the server), immediately after the initial rendering occurs."
  },

  "componentWillReceiveProps": {
    "prefix": "cwr",
    "body": "componentWillReceiveProps(nextProps) {\n\t$0\n}\n",
    "description": "Invoked when a component is receiving new props. This method is not called for the initial render. [DEPRECATION NOTE]: This method is deprecated in React 16.3"
  },

  "shouldComponentUpdate": {
    "prefix": "scu",
    "body": "shouldComponentUpdate(nextProps, nextState) {\n\t$0\n}\n",
    "description": "Invoked before rendering when new props or state are being received. "
  },

  "componentWillUpdate": {
    "prefix": "cwup",
    "body": "componentWillUpdate(nextProps, nextState) {\n\t$0\n}\n",
    "description": "Invoked immediately before rendering when new props or state are being received. [DEPRECATION NOTE]: This method is deprecated in React 16.3"
  },

  "componentDidUpdate": {
    "prefix": "cdup",
    "body": "componentDidUpdate(prevProps, prevState) {\n\t$0\n}\n",
    "description": "Invoked immediately after the component's updates are flushed to the DOM."
  },

  "componentWillUnmount": {
    "prefix": "cwun",
    "body": "componentWillUnmount() {\n\t$0\n}\n",
    "description": "Invoked immediately before a component is unmounted from the DOM."
  },

  "componentRender": {
    "prefix": "ren",
    "body": "render() {\n\treturn (\n\t\t<div>\n\t\t\t$0\n\t\t</div>\n\t);\n}",
    "description": "When called, it should examine this.props and this.state and return a single child element."
  },

  "componentSetStateObject": {
    "prefix": "sst",
    "body": "this.setState($0);",
    "description": "Performs a shallow merge of nextState into current state"
  },

  "componentSetStateFunc": {
    "prefix": "ssf",
    "body": "this.setState((state, props) => { return { $0 }});\n",
    "description": "Performs a shallow merge of nextState into current state"
  },

  "componentProps": {
    "prefix": "props",
    "body": "this.props.$0",
    "description": "Access component's props"
  },

  "componentState": {
    "prefix": "state",
    "body": "this.state.$0",
    "description": "Access component's state"
  },

  "bindThis": {
    "prefix": "bnd",
    "body": "this.$0 = this.$0.bind(this);",
    "description": "Binds the this of a method. To be used inside a constructor"
  },

  "propTypes": {
    "prefix": "rpt",
    "body": "$1.propTypes = {\n\t$2\n};",
    "description": "Creates empty propTypes declaration"
  },

  "defaultProps": {
    "prefix": "rdp",
    "body": "$1.defaultProps = {\n\t$2\n};",
    "description": "Creates empty defaultProps declaration"
  },

  "propTypeArray": {
    "prefix": "pta",
    "body": "PropTypes.array,",
    "description": "Array prop type"
  },
  "propTypeArrayRequired": {
    "prefix": "ptar",
    "body": "PropTypes.array.isRequired,",
    "description": "Array prop type required"
  },
  "propTypeBool": {
    "prefix": "ptb",
    "body": "PropTypes.bool,",
    "description": "Bool prop type"
  },
  "propTypeBoolRequired": {
    "prefix": "ptbr",
    "body": "PropTypes.bool.isRequired,",
    "description": "Bool prop type required"
  },
  "propTypeFunc": {
    "prefix": "ptf",
    "body": "PropTypes.func,",
    "description": "Func prop type"
  },
  "propTypeFuncRequired": {
    "prefix": "ptfr",
    "body": "PropTypes.func.isRequired,",
    "description": "Func prop type required"
  },
  "propTypeNumber": {
    "prefix": "ptn",
    "body": "PropTypes.number,",
    "description": "Number prop type"
  },
  "propTypeNumberRequired": {
    "prefix": "ptnr",
    "body": "PropTypes.number.isRequired,",
    "description": "Number prop type required"
  },
  "propTypeObject": {
    "prefix": "pto",
    "body": "PropTypes.object,",
    "description": "Object prop type"
  },
  "propTypeObjectRequired": {
    "prefix": "ptor",
    "body": "PropTypes.object.isRequired,",
    "description": "Object prop type required"
  },
  "propTypeString": {
    "prefix": "pts",
    "body": "PropTypes.string,",
    "description": "String prop type"
  },
  "propTypeStringRequired": {
    "prefix": "ptsr",
    "body": "PropTypes.string.isRequired,",
    "description": "String prop type required"
  },
  "propTypeNode": {
    "prefix": "ptnd",
    "body": "PropTypes.node,",
    "description": "Anything that can be rendered: numbers, strings, elements or an array"
  },
  "propTypeNodeRequired": {
    "prefix": "ptndr",
    "body": "PropTypes.node.isRequired,",
    "description": "Anything that can be rendered: numbers, strings, elements or an array required"
  },
  "propTypeElement": {
    "prefix": "ptel",
    "body": "PropTypes.element,",
    "description": "React element prop type"
  },
  "propTypeElementRequired": {
    "prefix": "ptelr",
    "body": "PropTypes.element.isRequired,",
    "description": "React element prop type required"
  },
  "propTypeInstanceOf": {
    "prefix": "pti",
    "body": "PropTypes.instanceOf($0),",
    "description": "Is an instance of a class prop type"
  },
  "propTypeInstanceOfRequired": {
    "prefix": "ptir",
    "body": "PropTypes.instanceOf($0).isRequired,",
    "description": "Is an instance of a class prop type required"
  },
  "propTypeEnum": {
    "prefix": "pte",
    "body": "PropTypes.oneOf(['$0']),",
    "description": "Prop type limited to specific values by treating it as an enum"
  },
  "propTypeEnumRequired": {
    "prefix": "pter",
    "body": "PropTypes.oneOf(['$0']).isRequired,",
    "description": "Prop type limited to specific values by treating it as an enum required"
  },
  "propTypeOneOfType": {
    "prefix": "ptet",
    "body": "PropTypes.oneOfType([\n\t$0\n]),",
    "description": "An object that could be one of many types"
  },
  "propTypeOneOfTypeRequired": {
    "prefix": "ptetr",
    "body": "PropTypes.oneOfType([\n\t$0\n]).isRequired,",
    "description": "An object that could be one of many types required"
  },
  "propTypeArrayOf": {
    "prefix": "ptao",
    "body": "PropTypes.arrayOf($0),",
    "description": "An array of a certain type"
  },
  "propTypeArrayOfRequired": {
    "prefix": "ptaor",
    "body": "PropTypes.arrayOf($0).isRequired,",
    "description": "An array of a certain type required"
  },
  "propTypeObjectOf": {
    "prefix": "ptoo",
    "body": "PropTypes.objectOf($0),",
    "description": "An object with property values of a certain type"
  },
  "propTypeObjectOfRequired": {
    "prefix": "ptoor",
    "body": "PropTypes.objectOf($0).isRequired,",
    "description": "An object with property values of a certain type required"
  },
  "propTypeObjectOfShape": {
    "prefix": "ptoos",
    "body": "PropTypes.objectOf(PropTypes.shape($0)),",
    "description": "An object whose keys are known ahead of time"
  },
  "propTypeObjectOfShapeRequired": {
    "prefix": "ptoosr",
    "body": "PropTypes.objectOf(PropTypes.shape($0)).isRequired,",
    "description": "An object whose keys are known ahead of time required"
  },
  "propTypeShape": {
    "prefix": "ptsh",
    "body": "PropTypes.shape({\n\t$0\n}),",
    "description": "An object taking on a particular shape"
  },
  "propTypeShapeRequired": {
    "prefix": "ptshr",
    "body": "PropTypes.shape({\n\t$0\n}).isRequired,",
    "description": "An object taking on a particular shape required"
  },
  "getSnapshotBeforeUpdate": {
    "prefix": "gsbu",
    "body": "getSnapshotBeforeUpdate(prevProps, prevState) {\n\t$0\n}\n",
    "description": "Invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture current values"
  },
  "getDerivedStateFromProps": {
    "prefix": "gdsfp",
    "body": "static getDerivedStateFromProps(nextProps, prevState) {\n\t$0\n}\n",
    "description": "Invoked after a component is instantiated as well as when it receives new props."
  },
  "componentDidCatch": {
    "prefix": "cdc",
    "body": "componentDidCatch(error, info) {\n\t$0\n}\n",
    "description": "Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them."
  }
}