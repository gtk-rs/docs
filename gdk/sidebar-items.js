initSidebarItems({"constant":[["ATOM_NONE",""],["NONE_DEVICE_PAD",""],["NONE_WINDOW",""],["SELECTION_CLIPBOARD",""],["SELECTION_PRIMARY",""],["SELECTION_SECONDARY",""],["SELECTION_TYPE_ATOM",""],["SELECTION_TYPE_BITMAP",""],["SELECTION_TYPE_COLORMAP",""],["SELECTION_TYPE_DRAWABLE",""],["SELECTION_TYPE_INTEGER",""],["SELECTION_TYPE_PIXMAP",""],["SELECTION_TYPE_STRING",""],["SELECTION_TYPE_WINDOW",""],["TARGET_BITMAP",""],["TARGET_COLORMAP",""],["TARGET_DRAWABLE",""],["TARGET_PIXMAP",""],["TARGET_STRING",""]],"enum":[["AxisUse","An enumeration describing the way in which a device axis (valuator) maps onto the predefined valuator types that GTK+ understands."],["ByteOrder","A set of values describing the possible byte-orders for storing pixel values in memory."],["ChangeData",""],["CrossingMode","Specifies the crossing mode for `EventCrossing`."],["CursorType","Predefined cursors."],["DevicePadFeature","A pad feature."],["DeviceToolType","Indicates the specific type of tool being used being a tablet. Such as an airbrush, pencil, etc."],["DeviceType","Indicates the device type. See [above][`DeviceManager`.description] for more information about the meaning of these device types."],["DragCancelReason","Used in `DragContext` to the reason of a cancelled DND operation."],["DragProtocol","Used in `DragContext` to indicate the protocol according to which DND is done."],["EventType","Specifies the type of the event."],["FullscreenMode","Indicates which monitor (in a multi-head setup) a window should span over when in fullscreen mode."],["GLError","Error enumeration for `GLContext`."],["GrabOwnership","Defines how device grabs interact with other devices."],["GrabStatus","Returned by `Device::grab`, `gdk_pointer_grab` and `gdk_keyboard_grab` to indicate success or the reason for the failure of the grab attempt."],["Gravity","Defines the reference point of a window and the meaning of coordinates passed to `gtk_window_move`. See `gtk_window_move` and the \"implementation notes\" section of the Extended Window Manager Hints specification for more details."],["InputMode","An enumeration that describes the mode of an input device."],["InputSource","An enumeration describing the type of an input device in general terms."],["ModifierIntent","This enum is used with `Keymap::get_modifier_mask` in order to determine what modifiers the currently used windowing system backend uses for particular purposes. For example, on X11/Windows, the Control key is used for invoking menu shortcuts (accelerators), whereas on Apple computers it’s the Command key (which correspond to `ModifierType::ControlMask` and `ModifierType::Mod2Mask`, respectively)."],["NotifyType","Specifies the kind of crossing for `EventCrossing`."],["OwnerChange","Specifies why a selection ownership was changed."],["PropMode","Describes how existing data is combined with new data when using `gdk_property_change`."],["PropertyState","Specifies the type of a property change for a `EventProperty`."],["ScrollDirection","Specifies the direction for `EventScroll`."],["SettingAction","Specifies the kind of modification applied to a setting in a `EventSetting`."],["SubpixelLayout","This enumeration describes how the red, green and blue components of physical pixels on an output device are laid out."],["VisibilityState","Specifies the visiblity status of a window for a `EventVisibility`."],["VisualType","A set of values that describe the manner in which the pixel values for a visual are converted into RGB values for display."],["WindowEdge","Determines a window edge or corner."],["WindowType","Describes the kind of window."],["WindowTypeHint","These are hints for the window manager that indicate what type of function the window has. The window manager can use this when determining decoration and behaviour of the window. The hint must be set before mapping the window."],["WindowWindowClass","`WindowWindowClass::InputOutput` windows are the standard kind of window you might expect. Such windows receive events and are also displayed on screen. `WindowWindowClass::InputOnly` windows are invisible; they are usually placed above other windows in order to trap or filter the events. You can’t draw on `WindowWindowClass::InputOnly` windows."]],"fn":[["beep",""],["error_trap_pop",""],["error_trap_pop_ignored",""],["error_trap_push",""],["events_get_angle",""],["events_get_center",""],["events_get_distance",""],["events_pending",""],["flush",""],["get_display_arg_name",""],["get_program_class",""],["get_show_events",""],["init",""],["keyval_convert_case",""],["keyval_from_name",""],["keyval_is_lower",""],["keyval_is_upper",""],["keyval_name",""],["keyval_to_lower",""],["keyval_to_unicode",""],["keyval_to_upper",""],["list_visuals",""],["notify_startup_complete",""],["notify_startup_complete_with_id",""],["pango_context_get",""],["pango_context_get_for_display",""],["pango_context_get_for_screen",""],["pango_layout_get_clip_region",""],["pango_layout_line_get_clip_region",""],["pixbuf_get_from_surface",""],["pre_parse_libgtk_only",""],["property_change",""],["property_delete",""],["property_get",""],["query_depths",""],["selection_convert",""],["selection_owner_get",""],["selection_owner_get_for_display",""],["selection_owner_set",""],["selection_owner_set_for_display",""],["selection_send_notify",""],["selection_send_notify_for_display",""],["set_allowed_backends",""],["set_double_click_time",""],["set_initialized","Informs this crate that GDK has been initialized and the current thread is the main one."],["set_program_class",""],["set_show_events",""],["setting_get",""],["synthesize_window_state",""],["test_render_sync",""],["test_simulate_button",""],["test_simulate_key",""],["text_property_to_utf8_list_for_display",""],["threads_add_idle",""],["threads_add_idle_full",""],["threads_add_timeout",""],["threads_add_timeout_full",""],["threads_add_timeout_seconds",""],["threads_add_timeout_seconds_full",""],["unicode_to_keyval",""],["utf8_to_string_target",""]],"mod":[["enums",""],["functions",""],["prelude","Traits intended for blanket imports."]],"struct":[["AnchorHints",""],["AppLaunchContext","`AppLaunchContext` is an implementation of `gio::AppLaunchContext` that handles launching an application in a graphical context. It provides startup notification and allows to launch applications on a specific screen or workspace."],["AppLaunchContextClass",""],["Atom","An opaque type representing a string as an index into a table of strings on the X server."],["AxisFlags",""],["Color",""],["Cursor","A `Cursor` represents a cursor. Its contents are private."],["CursorClass",""],["Device","The `Device` object represents a single input device, such as a keyboard, a mouse, a touchpad, etc."],["DeviceClass",""],["DeviceManager","In addition to a single pointer and keyboard for user interface input, GDK contains support for a variety of input devices, including graphics tablets, touchscreens and multiple pointers/keyboards interacting simultaneously with the user interface. Such input devices often have additional features, such as sub-pixel positioning information and additional device-dependent information."],["DeviceManagerClass",""],["DevicePad","`DevicePad` is an interface implemented by devices of type `InputSource::TabletPad`, it allows querying the features provided by the pad device."],["DeviceTool","Feature: `v3_22`"],["DeviceToolClass",""],["Display","`Display` objects purpose are two fold:"],["DisplayClass",""],["DisplayManager","The purpose of the `DisplayManager` singleton object is to offer notification when displays appear or disappear or the default display changes."],["DisplayManagerClass",""],["DragAction",""],["DragContext",""],["DragContextClass",""],["DrawingContext","`DrawingContext` is an object that represents the current drawing state of a `Window`."],["DrawingContextClass",""],["Error","A generic error capable of representing various error domains (types)."],["Event","A generic GDK event."],["EventButton","Used for button press and button release events. The `type` field will be one of `EventType::ButtonPress`, `EventType::2buttonPress`, `EventType::3buttonPress` or `EventType::ButtonRelease`,"],["EventConfigure","Generated when a window size or position has changed."],["EventCrossing","Generated when the pointer enters or leaves a window."],["EventDND","Generated during DND operations."],["EventExpose","Generated when all or part of a window becomes visible and needs to be redrawn."],["EventFocus","Describes a change of keyboard focus."],["EventGrabBroken","Generated when a pointer or keyboard grab is broken. On X11, this happens when the grab window becomes unviewable (i.e. it or one of its ancestors is unmapped), or if the same application grabs the pointer or keyboard again. Note that implicit grabs (which are initiated by button presses) can also cause `EventGrabBroken` events."],["EventKey","Describes a key press or key release event."],["EventMask",""],["EventMotion","Generated when the pointer moves."],["EventOwnerChange","Generated when the owner of a selection changes. On X11, this information is only available if the X server supports the XFIXES extension."],["EventPadAxis","Generated during `InputSource::TabletPad` interaction with tactile sensors."],["EventPadButton","Generated during `InputSource::TabletPad` button presses and releases."],["EventPadGroupMode","Generated during `InputSource::TabletPad` mode switches in a group."],["EventProperty","Describes a property change on a window."],["EventProximity","Proximity events are generated when using GDK’s wrapper for the XInput extension. The XInput extension is an add-on for standard X that allows you to use nonstandard devices such as graphics tablets. A proximity event indicates that the stylus has moved in or out of contact with the tablet, or perhaps that the user’s finger has moved in or out of contact with a touch screen."],["EventScroll","Generated from button presses for the buttons 4 to 7. Wheel mice are usually configured to generate button press events for buttons 4 and 5 when the wheel is turned."],["EventSelection","Generated when a selection is requested or ownership of a selection is taken over by another client application."],["EventSequence",""],["EventSetting","Generated when a setting is modified."],["EventTouch","Used for touch events. `type` field will be one of `EventType::TouchBegin`, `EventType::TouchUpdate`, `EventType::TouchEnd` or `EventType::TouchCancel`."],["EventTouchpadPinch","Generated during touchpad swipe gestures."],["EventTouchpadSwipe","Generated during touchpad swipe gestures."],["EventVisibility",""],["EventWindowState","Generated when the state of a toplevel window changes."],["FrameClock","A `FrameClock` tells the application when to update and repaint a window. This may be synced to the vertical refresh rate of the monitor, for example. Even when the frame clock uses a simple timer rather than a hardware-based vertical sync, the frame clock helps because it ensures everything paints at the same time (reducing the total number of frames). The frame clock can also automatically stop painting when it knows the frames will not be visible, or scale back animation framerates."],["FrameClockClass",""],["FrameClockPhase",""],["FrameTimings","A `FrameTimings` object holds timing information for a single frame of the application’s displays. To retrieve `FrameTimings` objects, use `FrameClock::get_timings` or `FrameClock::get_current_timings`. The information in `FrameTimings` is useful for precise synchronization of video with the event or audio streams, and for measuring quality metrics for the application’s display, such as latency and jitter."],["GLContext","`GLContext` is an object representing the platform-specific OpenGL drawing context."],["GLContextClass",""],["GRange",""],["Geometry","The `Geometry` struct gives the window manager information about a window’s geometry constraints. Normally you would set these on the GTK+ level using `gtk_window_set_geometry_hints`. `GtkWindow` then sets the hints on the `Window` it creates."],["ModifierType",""],["Monitor","`Monitor` objects represent the individual outputs that are associated with a `Display`. `Display` has APIs to enumerate monitors with `Display::get_n_monitors` and `Display::get_monitor`, and to find particular monitors with `Display::get_primary_monitor` or `Display::get_monitor_at_window`."],["MonitorClass",""],["RGBA","A `RGBA` is used to represent a (possibly translucent) color, in a way that is compatible with cairo’s notion of color."],["Rectangle","Defines the position and size of a rectangle. It is identical to `cairo::RectangleInt`."],["RgbaParseError",""],["Screen","`Screen` objects are the GDK representation of the screen on which windows can be displayed and on which the pointer moves. X originally identified screens with physical screens, but nowadays it is more common to have a single `Screen` which combines several physical monitors (see `Screen::get_n_monitors`)."],["ScreenClass",""],["Seat","The `Seat` object represents a collection of input devices that belong to a user."],["SeatCapabilities",""],["SeatClass",""],["Visual","A `Visual` contains information about a particular visual."],["VisualClass",""],["WMDecoration",""],["WMFunction",""],["Window","Implements"],["WindowAttr",""],["WindowClass",""],["WindowHints",""],["WindowState",""]],"trait":[["DevicePadExt","Trait containing all `DevicePad` methods."],["WindowExt","Trait containing all `Window` methods."]],"type":[["key",""]]});