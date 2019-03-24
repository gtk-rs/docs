initSidebarItems({"constant":[["NONE_ACTION",""],["NONE_COMPONENT",""],["NONE_DOCUMENT",""],["NONE_EDITABLE_TEXT",""],["NONE_GOBJECT_ACCESSIBLE",""],["NONE_HYPERLINK",""],["NONE_HYPERLINK_IMPL",""],["NONE_HYPERTEXT",""],["NONE_IMAGE",""],["NONE_MISC",""],["NONE_NO_OP_OBJECT",""],["NONE_NO_OP_OBJECT_FACTORY",""],["NONE_OBJECT",""],["NONE_OBJECT_FACTORY",""],["NONE_PLUG",""],["NONE_REGISTRY",""],["NONE_RELATION",""],["NONE_RELATION_SET",""],["NONE_SELECTION",""],["NONE_SOCKET",""],["NONE_STATE_SET",""],["NONE_STREAMABLE_CONTENT",""],["NONE_TABLE",""],["NONE_TABLE_CELL",""],["NONE_TEXT",""],["NONE_UTIL",""],["NONE_VALUE",""],["NONE_WINDOW",""]],"enum":[["CoordType","Specifies how xy coordinates are to be interpreted. Used by functions such as `Component::get_position` and `Text::get_character_extents`"],["Layer","Describes the layer of a component"],["RelationType","Describes the type of the relation"],["Role","Describes the role of an object"],["ScrollType","Specifies where an object should be placed on the screen when using scroll_to."],["StateType","The possible types of states of an object"],["TextAttribute","Describes the text attributes supported"],["TextBoundary","Text boundary types used for specifying boundaries for regions of text. This enumeration is deprecated since 2.9.4 and should not be used. Use AtkTextGranularity with `Text::get_string_at_offset` instead."],["TextClipType","Describes the type of clipping required."],["TextGranularity","Text granularity types used for specifying the granularity of the region of text we are interested in."],["ValueType","Default types for a given value. Those are defined in order to easily get localized strings to describe a given value or a given subrange, using `ValueType::get_localized_name`."]],"mod":[["prelude","Traits intended for blanket imports."]],"struct":[["Action","`Action` should be implemented by instances of `Object` classes with which the user can interact directly, i.e. buttons, checkboxes, scrollbars, e.g. components which are not \"passive\" providers of UI information."],["Attribute","AtkAttribute is a string name/value pair representing a generic attribute. This can be used to expose additional information from an accessible object as a whole (see `AtkObjectExt::get_attributes`) or an document (see `Document::get_attributes`). In the case of text attributes (see `Text::get_default_attributes`), `TextAttribute` enum defines all the possible text attribute names. You can use `TextAttribute::get_name` to get the string name from the enum value. See also `TextAttribute::for_name` and `TextAttribute::get_value` for more information."],["Component","`Component` should be implemented by most if not all UI elements with an actual on-screen presence, i.e. components which can be said to have a screen-coordinate bounding box. Virtually all widgets will need to have `Component` implementations provided for their corresponding `Object` class. In short, only UI elements which are not GUI elements will omit this ATK interface."],["Document","The AtkDocument interface should be supported by any object whose content is a representation or view of a document. The AtkDocument interface should appear on the toplevel container for the document content; however AtkDocument instances may be nested (i.e. an AtkDocument may be a descendant of another AtkDocument) in those cases where one document contains \"embedded content\" which can reasonably be considered a document in its own right."],["EditableText","`EditableText` should be implemented by UI components which contain text which the user can edit, via the `Object` corresponding to that component (see `Object`)."],["GObjectAccessible","This object class is derived from AtkObject. It can be used as a basis for implementing accessible objects for GObjects which are not derived from `GtkWidget`. One example of its use is in providing an accessible object for GnomeCanvasItem in the GAIL library."],["GObjectAccessibleClass",""],["Hyperlink","An ATK object which encapsulates a link or set of links (for instance in the case of client-side image maps) in a hypertext document. It may implement the AtkAction interface. AtkHyperlink may also be used to refer to inline embedded content, since it allows specification of a start and end offset within the host AtkHypertext object."],["HyperlinkClass",""],["HyperlinkImpl","AtkHyperlinkImpl allows AtkObjects to refer to their associated AtkHyperlink instance, if one exists. AtkHyperlinkImpl differs from AtkHyperlink in that AtkHyperlinkImpl is an interface, whereas AtkHyperlink is a object type. The AtkHyperlinkImpl interface allows a client to query an AtkObject for the availability of an associated AtkHyperlink instance, and obtain that instance. It is thus particularly useful in cases where embedded content or inline content within a text object is present, since the embedding text object implements AtkHypertext and the inline/embedded objects are exposed as children which implement AtkHyperlinkImpl, in addition to their being obtainable via AtkHypertext:getLink followed by AtkHyperlink:getObject."],["HyperlinkStateFlags",""],["Hypertext","An interface used for objects which implement linking between multiple resource or content locations, or multiple 'markers' within a single document. A Hypertext instance is associated with one or more Hyperlinks, which are associated with particular offsets within the Hypertext's included content. While this interface is derived from Text, there is no requirement that Hypertext instances have textual content; they may implement Image as well, and Hyperlinks need not have non-zero text offsets."],["Image","`Image` should be implemented by `Object` subtypes on behalf of components which display image/pixmap information onscreen, and which provide information (other than just widget borders, etc.) via that image content. For instance, icons, buttons with icons, toolbar elements, and image viewing panes typically should implement `Image`."],["Misc","A set of utility functions for thread locking. This interface and all his related methods are deprecated since 2.12."],["MiscClass",""],["NoOpObject","An AtkNoOpObject is an AtkObject which purports to implement all ATK interfaces. It is the type of AtkObject which is created if an accessible object is requested for an object type for which no factory type is specified."],["NoOpObjectClass",""],["NoOpObjectFactory","The AtkObjectFactory which creates an AtkNoOpObject. An instance of this is created by an AtkRegistry if no factory type has not been specified to create an accessible object of a particular type."],["NoOpObjectFactoryClass",""],["Object","This class is the primary class for accessibility support via the Accessibility ToolKit (ATK). Objects which are instances of `Object` (or instances of AtkObject-derived types) are queried for properties which relate basic (and generic) properties of a UI component such as name and description. Instances of `Object` may also be queried as to whether they implement other ATK interfaces (e.g. `Action`, `Component`, etc.), as appropriate to the role which a given UI component plays in a user interface."],["ObjectClass",""],["ObjectFactory","This class is the base object class for a factory used to create an accessible object for a specific GType. The function `RegistryExt::set_factory_type` is normally called to store in the registry the factory type to be used to create an accessible of a particular GType."],["ObjectFactoryClass",""],["Plug","See `Socket`"],["PlugClass",""],["Range","`Range` are used on `Value`, in order to represent the full range of a given component (for example an slider or a range control), or to define each individual subrange this full range is splitted if available. See `Value` documentation for further details."],["Rectangle","A data structure for holding a rectangle. Those coordinates are relative to the component top-level parent."],["Registry","The AtkRegistry is normally used to create appropriate ATK \"peers\" for user interface components. Application developers usually need only interact with the AtkRegistry by associating appropriate ATK implementation classes with GObject classes via the atk_registry_set_factory_type call, passing the appropriate GType for application custom widget classes."],["RegistryClass",""],["Relation","An AtkRelation describes a relation between an object and one or more other objects. The actual relations that an object has with other objects are defined as an AtkRelationSet, which is a set of AtkRelations."],["RelationClass",""],["RelationSet","The AtkRelationSet held by an object establishes its relationships with objects beyond the normal \"parent/child\" hierarchical relationships that all user interface objects have. AtkRelationSets establish whether objects are labelled or controlled by other components, share group membership with other components (for instance within a radio-button group), or share content which \"flows\" between them, among other types of possible relationships."],["RelationSetClass",""],["Selection","`Selection` should be implemented by UI components with children which are exposed by `atk_object_ref_child` and `atk_object_get_n_children`, if the use of the parent UI component ordinarily involves selection of one or more of the objects corresponding to those `Object` children - for example, selectable lists."],["Socket","Together with `Plug`, `Socket` provides the ability to embed accessibles from one process into another in a fashion that is transparent to assistive technologies. `Socket` works as the container of `Plug`, embedding it using the method `AtkSocketExt::embed`. Any accessible contained in the `Plug` will appear to the assistive technologies as being inside the application that created the `Socket`."],["SocketClass",""],["StateSet","An AtkStateSet is a read-only representation of the full set of `AtkStates` that apply to an object at a given time. This set is not meant to be modified, but rather created when `AtkObjectExt::ref_state_set`() is called."],["StateSetClass",""],["StreamableContent","An interface whereby an object allows its backing content to be streamed to clients. Typical implementors would be images or icons, HTML content, or multimedia display/rendering widgets."],["Table","`Table` should be implemented by components which present elements ordered via rows and columns. It may also be used to present tree-structured information if the nodes of the trees can be said to contain multiple \"columns\". Individual elements of an `Table` are typically referred to as \"cells\". Those cells should implement the interface `TableCell`, but `Atk` doesn't require them to be direct children of the current `Table`. They can be grand-children, grand-grand-children etc. `Table` provides the API needed to get a individual cell based on the row and column numbers."],["TableCell","Being `Table` a component which present elements ordered via rows and columns, an `TableCell` is the interface which each of those elements, so \"cells\" should implement."],["Text","`Text` should be implemented by `AtkObjects` on behalf of widgets that have text content which is either attributed or otherwise non-trivial. `AtkObjects` whose text content is simple, unattributed, and very brief may expose that content via `AtkObjectExt::get_name` instead; however if the text is editable, multi-line, typically longer than three or four words, attributed, selectable, or if the object already uses the 'name' ATK property for other information, the `Text` interface should be used to expose the text content. In the case of editable text content, `EditableText` (a subtype of the `Text` interface) should be implemented instead."],["TextRange","A structure used to describe a text range."],["TextRectangle","A structure used to store a rectangle used by AtkText."],["Util","A set of ATK utility functions which are used to support event registration of various types, and obtaining the 'root' accessible of a process and information about the current ATK implementation and toolkit version."],["UtilClass",""],["Value","`Value` should be implemented for components which either display a value from a bounded range, or which allow the user to specify a value from a bounded range, or both. For instance, most sliders and range controls, as well as dials, should have `Object` representations which implement `Value` on the component's behalf. `AtKValues` may be read-only, in which case attempts to alter the value return would fail."],["Window","`Window` should be implemented by the UI elements that represent a top-level window, such as the main window of an application or dialog."]],"trait":[["AtkActionExt","Trait containing all `Action` methods."],["AtkImageExt","Trait containing all `Image` methods."],["AtkMiscExt","Trait containing all `Misc` methods."],["AtkObjectExt","Trait containing all `Object` methods."],["AtkPlugExt","Trait containing all `Plug` methods."],["AtkSocketExt","Trait containing all `Socket` methods."],["AtkWindowExt","Trait containing all `Window` methods."],["ComponentExt","Trait containing all `Component` methods."],["DocumentExt","Trait containing all `Document` methods."],["EditableTextExt","Trait containing all `EditableText` methods."],["GObjectAccessibleExt","Trait containing all `GObjectAccessible` methods."],["HyperlinkExt","Trait containing all `Hyperlink` methods."],["HyperlinkImplExt","Trait containing all `HyperlinkImpl` methods."],["HypertextExt","Trait containing all `Hypertext` methods."],["ObjectFactoryExt","Trait containing all `ObjectFactory` methods."],["RegistryExt","Trait containing all `Registry` methods."],["RelationExt","Trait containing all `Relation` methods."],["RelationSetExt","Trait containing all `RelationSet` methods."],["SelectionExt","Trait containing all `Selection` methods."],["StateSetExt","Trait containing all `StateSet` methods."],["StreamableContentExt","Trait containing all `StreamableContent` methods."],["TableCellExt","Trait containing all `TableCell` methods."],["TableExt","Trait containing all `Table` methods."],["TextExt","Trait containing all `Text` methods."],["ValueExt","Trait containing all `Value` methods."]],"type":[["AttributeSet",""],["State",""]]});