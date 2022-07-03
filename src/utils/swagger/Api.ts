/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CreateProfileData {
  fullname: string;
  username: string;
  password: string;
  email: string;
  role: "Admin" | "Member";
  sponsors?: string[];
}

export interface CreateProfileInput {
  data: CreateProfileData;
}

export interface ProfileUserModel {
  username: string;
  role: "Admin" | "Member";
  id: string;
  email: string;
  isActive: boolean;
}

export interface ProfileModel {
  id: string;
  fullname: string;
  userId: string;
  image: string;
  user: ProfileUserModel;
  sponsors: ProfileModel[];
  interns: ProfileModel[];
}

export interface ProfileWhereData {
  id?: string;
  idList?: string[];
  fullname?: string;
  userId?: string;
  onlyInterns?: boolean;

  /** `IsActive` is set to be true on default. */
  isActive?: boolean;
}

export interface PaginationData {
  take?: number;
  skip?: number;
}

export interface SortByData {
  field?: string;
  descending?: boolean;
}

export interface ReadProfileInput {
  where?: ProfileWhereData;
  pagination?: PaginationData;
  sortBy?: SortByData;
}

export interface ReadProfileOutput {
  data: ProfileModel[];
  count: number;
}

export interface UpdateProfileData {
  fullname?: string;
  email?: string;
  role?: "Admin" | "Member";
  username?: string;
  sponsors?: string[];
  interns?: string[];
  isActive?: boolean;
}

export interface UpdateProfileInput {
  id: string;
  data: UpdateProfileData;
}

export interface MeData {
  profileId: string;
  role: string;
  userId: string;
  fullname: string;
  username: string;
  email: string;
  image: string;
  hasInterns: boolean;
  isActive: boolean;
}

export interface MeOutput {
  data: MeData;
}

export interface HasAccessToProfileInputData {
  userIdList?: string[];
}

export interface HasAccessToProfileInput {
  where: HasAccessToProfileInputData;
}

export interface HasAccessToProfileData {
  hasAccess: boolean;
}

export interface HasAccessToProfileOutput {
  data: HasAccessToProfileData;
}

export interface SetProfileValidationData {
  validation: boolean;
}

export interface SetProfileValidationInput {
  data: SetProfileValidationData;
  id: string;
}

export interface SetClientSettingData {
  clientSettings?: object;
}

export interface SetClientSettingInput {
  data: SetClientSettingData;
}

export interface LoginData {
  username: string;
  password: string;
}

export interface LoginInput {
  data: LoginData;
}

export interface LoginOutput {
  token: string;
}

export interface ChangePasswordData {
  oldPassword: string;
  newPassword: string;
}

export interface ChangePasswordInput {
  data: ChangePasswordData;
}

export interface UserModel {
  username: string;
  role: string;
  id: string;
  email: string;
  isActive: boolean;
}

export interface ForgetPasswordInput {
  email: string;
}

export interface VerifyChangePasswordCodeInputData {
  code: number;
  email: string;
}

export interface VerifyChangePasswordCodeInput {
  data: VerifyChangePasswordCodeInputData;
}

export interface VerifyChangePasswordCodeOutput {
  jwt: string;
}

export interface ChangeForgottenPasswordData {
  newPassword: string;
  code: number;
  email: string;
}

export interface ChangeForgottenPasswordInput {
  data: ChangeForgottenPasswordData;
}

export interface ChangeForgottenPasswordOutput {
  token: string;
}

export interface CreateCategoryData {
  title: string;
  color: string;
  schemaItems?: object[];
}

export interface CreateCategoryInput {
  data: CreateCategoryData;
}

export interface CategoryModel {
  id: string;
  title: string;
  color: string;
  schemaItems: object[];
}

export interface CategoryWhereData {
  id?: string;
  title?: string;
}

export interface ReadCategoryInput {
  where?: CategoryWhereData;
  pagination?: PaginationData;
  sortBy?: SortByData;
}

export interface ReadCategoryOutput {
  data: CategoryModel[];
  count: number;
}

export interface UpdateCategoryData {
  title?: string;
  color?: string;
  schemaItems?: object[];
}

export interface UpdateCategoryInput {
  id: string;
  data: UpdateCategoryData;
}

export interface DeleteCategoryInput {
  id: string;
}

export interface ProjectMember {
  memberId: string;
}

export interface CreateProjectData {
  name: string;
  gitAddress?: string;
  projectManagerId: string;
  description?: string;
  tags?: string[];
  status: "Implementing" | "Canceled" | "Delivering" | "Maintaining" | "Closed" | "Analyze";
  projectMembers: ProjectMember[];
  groupId?: string;
}

export interface CreateProjectInput {
  data: CreateProjectData;
}

export interface ProjectProfileModel {
  id: string;
  userId: string;
  fullname: string;
  email: string;
  username: string;
  role: "Admin" | "Member";
}

export interface MilestoneModel {
  id: string;

  /** @format date-time */
  startDate: string;

  /** @format date-time */
  dueDate: string;
  description: string;
  title: string;
  projectId: string;
}

export interface ProjectTagModel {
  id: string;
  label: string;
  color: string;
  creatorId: string;
}

export interface GroupProfileModel {
  id: string;
  userId: string;
  fullname: string;
  email: string;
  username: string;
  role: "Admin" | "Member";
}

export interface GroupProjectModel {
  id: string;
  name: string;
  gitAddress: string;
  projectManagerId: string;
  description: string;
  status: "Implementing" | "Canceled" | "Delivering" | "Maintaining" | "Closed" | "Analyze";

  /** @format date-time */
  createdDate: string;
}

export interface GroupModel {
  id: string;
  title: string;

  /** @format date-time */
  createdDate: string;

  /** @format date-time */
  updatedDate: string;
  groupManager: GroupProfileModel;
  projects: GroupProjectModel[];
  members: GroupProfileModel[];
  subGroups: GroupModel[];
  parentGroup: GroupModel;
  parentId: string;
}

export interface ProjectModel {
  id: string;
  name: string;
  gitAddress: string;
  projectManagerId: string;
  projectManager: ProjectProfileModel;
  description: string;
  status: "Implementing" | "Canceled" | "Delivering" | "Maintaining" | "Closed" | "Analyze";
  activatedMilestone: MilestoneModel;
  members: ProjectProfileModel[];
  tags: ProjectTagModel[];

  /** @format date-time */
  createdDate: string;
  group: GroupModel;
}

export interface ProjectWhereData {
  id?: string;
  name?: string;
  gitAddress?: string;
  label?: string;
  projectManagerId?: string;
  description?: string;
  status?: "Implementing" | "Canceled" | "Delivering" | "Maintaining" | "Closed" | "Analyze";
  groupId?: string;
}

export interface ReadProjectInput {
  where?: ProjectWhereData;
  pagination?: PaginationData;
  sortBy?: SortByData;
}

export interface ReadProjectOutput {
  data: ProjectModel[];
  count: number;
}

export interface UpdateProjectData {
  name?: string;
  gitAddress?: string;
  projectManagerId?: string;
  description?: string;
  tags?: string[];
  activatedMilestoneId?: string;
  status?: "Implementing" | "Canceled" | "Delivering" | "Maintaining" | "Closed" | "Analyze";
  projectMembers?: ProjectMember[];
  groupId?: string;
}

export interface UpdateProjectInput {
  id: string;
  data: UpdateProjectData;
}

export interface DeleteProjectInput {
  id: string;
}

export interface CreateTaskData {
  title: string;
  responsibleId?: string;
  assigneeId?: string;
  tags?: string[];
  categoryId: string;
  description?: string;

  /** @format date-time */
  deadline?: string;
  estimatedTime?: number;
  priority?: "VeryImportant" | "Important" | "Normal" | "NotImportant";
  projectId?: string;
  sprintId?: string;
  metadata?: object;
}

export interface CreateTaskInput {
  data: CreateTaskData;
}

export interface TaskTagModel {
  id: string;
  label: string;
  color: string;
  creatorId: string;
}

export interface ActivityModel {
  id: string;
  actorId: string;
  operation: "Create" | "Update" | "Delete";
  fieldName:
    | "Title"
    | "Status"
    | "Deadline"
    | "Description"
    | "CategoryId"
    | "AssigneeId"
    | "ResponsibleId"
    | "EstimatedTime"
    | "Tags"
    | "Sprint"
    | "Priority"
    | "EpicId";
  oldValue: string;
  newValue: string;
  taskId: string;

  /** @format date-time */
  date: string;
}

export interface TaskCommentModel {
  id: string;
  text: string;
  creatorId: string;

  /** @format date-time */
  createdDate: string;

  /** @format date-time */
  updatedDate: string;
  taskId: string;
}

export interface Metadata {
  projectId: string;
  sprintId: string;
  spentTime: number;
  categoryData: object;
}

export interface TaskModel {
  id: string;
  title: string;
  description: string;

  /** @format date-time */
  deadline: string;
  estimatedTime: number;
  responsibleId: string;
  assigneeId: string;
  creatorId: string;
  status: "Todo" | "Doing" | "Done" | "Blocked" | "Suspended" | "Verified";
  categoryId: string;
  epicId: string;
  tags: TaskTagModel[];
  activities: ActivityModel[];
  comments: TaskCommentModel[];
  metadata: Metadata;

  /** @format date-time */
  createdDate: string;
}

export interface DateRange {
  startDate?: string;
  endDate?: string;
}

export interface TaskWhereData {
  id?: string;
  idList?: string[];
  responsibleId?: string;
  assigneeId?: string;
  creatorId?: string;
  title?: string;
  description?: string;
  tag?: string;
  status?: "Todo" | "Doing" | "Done" | "Blocked" | "Suspended" | "Verified";
  isFinished?: boolean;
  dateRange?: DateRange;
  categoryId?: string;
  projectId?: string;
  sprintId?: string;
  myTask?: boolean;
}

export interface ReadTaskInput {
  where?: TaskWhereData;
  pagination?: PaginationData;
  sortBy?: SortByData;
}

export interface ReadTaskOutput {
  data: TaskModel[];
  count: number;
}

export interface UpdateTaskData {
  title?: string;
  responsibleId?: string;
  assigneeId?: string;
  categoryId?: string;
  description?: string;
  status?: "Todo" | "Doing" | "Done" | "Blocked" | "Suspended" | "Verified";
  priority?: "VeryImportant" | "Important" | "Normal" | "NotImportant";
  deadline?: string;
  estimatedTime?: number;
  sprintId?: string;
  projectId?: string;
  tags?: string[];
  metadata?: object;
  epicId?: string;
}

export interface UpdateTaskInput {
  id: string;
  data: UpdateTaskData;
}

export interface DeleteTaskInput {
  id: string;
}

export interface GetProjectTasksStatusWhereData {
  projectId: string;
  sprintId?: string;
}

export interface GetProjectTasksStatusInput {
  where: GetProjectTasksStatusWhereData;
  pagination?: PaginationData;
  sortBy?: SortByData;
}

export interface GetProjectTasksStatusData {
  count: number;
  status: "Todo" | "Doing" | "Done" | "Blocked" | "Suspended" | "Verified";
}

export interface GetProjectTasksStatusOutput {
  data: GetProjectTasksStatusData[];
}

export interface ReadProjectTaskProgressSeperatedByAssigneeWhereData {
  projectId: string;
  sprintId?: string;
}

export interface ReadProjectTaskProgressSeperatedByAssigneeInput {
  where: ReadProjectTaskProgressSeperatedByAssigneeWhereData;
  pagination?: PaginationData;
  sortBy?: SortByData;
}

export interface ReadProjectTaskProgressSeperatedByAssigneeData {
  assigneeId: string;
  openTasks: number;
  closedTask: number;
}

export interface ReadProjectTaskProgressSeperatedByAssigneeOutput {
  data: ReadProjectTaskProgressSeperatedByAssigneeData[];
}

export interface GetTasksBurndownReportInputData {
  projectId: string;
  sprintId: string;
  duration: number;
}

export interface GetTasksBurndownReportInput {
  where: GetTasksBurndownReportInputData;
}

export interface GetTasksBurndownReportOutputData {
  section: number;
  estimatedTime: number;
}

export interface GetTasksBurndownReportOutput {
  data: GetTasksBurndownReportOutputData[];
}

export interface GetGroupTasksStatusWhereData {
  groupId: string;
}

export interface GetGroupTasksStatusInput {
  where: GetGroupTasksStatusWhereData;
}

export interface GetGroupTasksStatusData {
  count: number;
  status: "Todo" | "Doing" | "Done" | "Blocked" | "Suspended" | "Verified";
}

export interface GetGroupTasksStatusOutput {
  data: GetGroupTasksStatusData[];
}

export interface ReadGroupTaskProgressSeperatedByAssigneeWhereData {
  groupId: string;
}

export interface ReadGroupTaskProgressSeperatedByAssigneeInput {
  where: ReadGroupTaskProgressSeperatedByAssigneeWhereData;
}

export interface ReadddGroupTaskProgressSeperatedByAssigneeData {
  assigneeId: string;
  openTasks: number;
  closedTask: number;
}

export interface ReadddGroupTaskProgressSeperatedByAssigneeOutput {
  data: ReadddGroupTaskProgressSeperatedByAssigneeData[];
}

export interface ReportItemData {
  taskId: string;
  description?: string;
  spentTime: number;
}

export interface CreateReportData {
  /** @format date-time */
  date: string;
  description?: string;
  itemList: ReportItemData[];
}

export interface CreateReportInput {
  data: CreateReportData;
}

export interface ReportTaskModel {
  id: string;
  title: string;
  assigneeId: string;
  projectId: string;
  categoryId: string;
  sprintId: string;
}

export interface ReportItemModel {
  id: string;

  /** @format date-time */
  createdDate: string;

  /** @format date-time */
  updatedDate: string;
  description: string;
  reportId: string;
  taskId: string;
  spentTime: number;
  degreeId: string;
  task: ReportTaskModel;
}

export interface ReportModel {
  id: string;

  /** @format date-time */
  createdDate: string;

  /** @format date-time */
  updatedDate: string;
  description: string;
  userId: string;
  isValid: boolean;
  itemList: ReportItemModel[];

  /** @format date-time */
  date: string;
}

export interface CreateReportOutput {
  data: ReportModel;
}

export interface ReadReportWhereData {
  id?: string;
  userId?: string;
  isValid?: boolean;
  creationDate?: DateRange;
  date?: DateRange;
}

export interface ReadReportInput {
  where?: ReadReportWhereData;
  pagination?: PaginationData;
  sortBy?: SortByData;
}

export interface ReadReportOutput {
  data: ReportModel[];
  count: number;
}

export interface ReadReportItemWhereData {
  userId?: string;
  date?: DateRange;
  taskId?: string;
  onlyNullDegree?: boolean;
}

export interface ReadReportItemInput {
  where?: ReadReportItemWhereData;
  pagination?: PaginationData;
  sortBy?: SortByData;
}

export interface ReadReportItemOutput {
  data: ReportItemModel[];
  count: number;
}

export interface UpdateReportItemDegreeData {
  degreeId?: string;
}

export interface UpdateReportItemDegreeInput {
  id: string;
  data: UpdateReportItemDegreeData;
}

export interface GetWorkHoursReportWhereData {
  userId: string;
  operation: "sum" | "avg";
  unit: number;
  duration: DateRange;
}

export interface GetWorkHoursReportInput {
  where: GetWorkHoursReportWhereData;
  pagination?: PaginationData;
  sortBy?: SortByData;
}

export interface GetWorkHoursReportOutputData {
  /** @format date-time */
  startDate: string;

  /** @format date-time */
  endDate: string;
  value: number;
}

export interface GetWorkHoursReportOutput {
  data: GetWorkHoursReportOutputData[];
}

export interface GetWorkHoursClassifiedReportWhereData {
  userId: string;
  operation: "sum" | "avg";
  mode: "Category" | "Project";
  unit: number;
  duration: DateRange;
}

export interface GetWorkHoursClassifiedReportInput {
  where: GetWorkHoursClassifiedReportWhereData;
  pagination?: PaginationData;
  sortBy?: SortByData;
}

export interface GetWorkHoursClassifiedReportOutputData {
  /** @format date-time */
  startDate: string;

  /** @format date-time */
  endDate: string;
  category: string;
  value: number;
}

export interface GetWorkHoursClassifiedReportOutput {
  data: GetWorkHoursClassifiedReportOutputData[];
}

export interface UpdateReportData {
  /** @format date-time */
  date?: string;
  description?: string;
  itemList: ReportItemData[];
}

export interface UpdateReportInput {
  data: UpdateReportData;
  id: string;
}

export interface SetReportValidationData {
  validation: boolean;
}

export interface SetReportValidationInput {
  data: SetReportValidationData;
  id: string;
}

export interface ReadReportItemByParameterWhereData {
  projectId: string;
  sprintId?: string;
  parameter: "Tag" | "Category" | "Assignee";
}

export interface ReadReportItemByParameterInput {
  where: ReadReportItemByParameterWhereData;
}

export interface ParameteredReportItemModel {
  parameter: string;
  time: number;
}

export interface ReadReportItemByParameterOutput {
  data: ParameteredReportItemModel[];
}

export interface ReadProjectSpentTimeSepratedByUserInputData {
  projectId: string;
  sprintId?: string;
}

export interface ReadProjectSpentTimeSepratedByUserInput {
  where: ReadProjectSpentTimeSepratedByUserInputData;
}

export interface ReadProjectSpentTimeSepratedByUserOutputData {
  userId: string;
  spentTime: number;
}

export interface ReadProjectSpentTimeSepratedByUserOutput {
  data: ReadProjectSpentTimeSepratedByUserOutputData[];
}

export interface GetTaskSpentTimeInputData {
  taskId: string;
  startDate?: string;
  endDate?: string;
  duration: number;
}

export interface GetTaskSpentTimeInput {
  where: GetTaskSpentTimeInputData;
}

export interface GetTaskSpentTimeSectionOutputData {
  userId: string;

  /** @format date-time */
  spentTime: string;
}

export interface GetTaskSpentTimeOutputData {
  section: number;
  sectionData: GetTaskSpentTimeSectionOutputData[];
}

export interface GetTaskSpentTimeOutput {
  data: GetTaskSpentTimeOutputData[];
  metaData: Metadata;
}

export interface ReadGroupSpentTimeSepratedByUserInputData {
  groupId: string;
}

export interface ReadGroupSpentTimeSepratedByUserInput {
  where: ReadGroupSpentTimeSepratedByUserInputData;
}

export interface ReadGroupSpentTimeSepratedByUserOutputData {
  userId: string;
  spentTime: number;
}

export interface ReadGroupSpentTimeSepratedByUserOutput {
  data: ReadGroupSpentTimeSepratedByUserOutputData[];
}

export interface CreateEventData {
  title: string;
  projectId: string;

  /** @format date-time */
  date: string;
}

export interface CreateEventInput {
  data: CreateEventData;
}

export interface EventModel {
  id: string;
  title: string;
  projectId: string;
  project?: ProjectModel;

  /** @format date-time */
  date: string;
}

export interface EventWhereData {
  id?: string;
  title?: string;
  projectId: string;
  date?: DateRange;
}

export interface ReadEventInput {
  where: EventWhereData;
  pagination?: PaginationData;
  sortBy?: SortByData;
}

export interface ReadEventOutput {
  data: EventModel[];
  count: number;
}

export interface UpdateEventData {
  title?: string;

  /** @format date-time */
  date?: string;
}

export interface UpdateEventInput {
  id: string;
  data: UpdateEventData;
}

export interface DeleteEventInput {
  id: string;
}

export interface CreateCommentData {
  text: string;
  taskId: string;
}

export interface CreateCommentInput {
  data: CreateCommentData;
}

export interface CommentWhereData {
  id?: string;
  text?: string;
  creatorId?: string;
  taskId?: string;
}

export interface ReadCommentInput {
  where?: CommentWhereData;
  pagination?: PaginationData;
  sortBy?: SortByData;
}

export interface ReadCommentOutput {
  data: TaskCommentModel[];
  count: number;
}

export interface UpdateCommentData {
  text?: string;
}

export interface UpdateCommentInput {
  id: string;
  data: UpdateCommentData;
}

export interface DeleteCommentInput {
  id: string;
}

export interface CreateIssueData {
  title: string;
  responsibleId?: string;
  assigneeId?: string;
  categoryId: string;
  description?: string;

  /** @format date-time */
  deadline: string;
  estimatedTime: number;
  projectId?: string;
  sprintId?: string;
  tags?: string[];
  metadata?: object;
}

export interface CreateIssueInput {
  data: CreateIssueData;
}

export interface IssueWhereData {
  id?: string;
  idList?: string[];
  responsibleId?: string;
  assigneeId?: string;
  creatorId?: string;
  title?: string;
  description?: string;
  tag?: string;
  status?: "Todo" | "Doing" | "Done" | "Blocked" | "Suspended";
  isFinished?: boolean;
  dateRange?: DateRange;
  categoryId?: string;
  projectId?: string;
  sprintId?: string;
}

export interface ReadIssueInput {
  where?: IssueWhereData;
  pagination?: PaginationData;
  sortBy?: SortByData;
}

export interface TaskActivityModel {
  id: string;
  actorId: string;
  operation: "Create" | "Update" | "Delete";
  fieldName:
    | "Title"
    | "Status"
    | "Deadline"
    | "Description"
    | "CategoryId"
    | "AssigneeId"
    | "ResponsibleId"
    | "EstimatedTime"
    | "Tags"
    | "Sprint";
  oldValue: object;
  newValue: object;
  taskId: string;

  /** @format date-time */
  date: string;
}

export interface IssueModel {
  id: string;
  title: string;
  description: string;

  /** @format date-time */
  deadline: string;
  estimatedTime: number;
  responsibleId: string;
  assigneeId: string;
  creatorId: string;
  status: "Todo" | "Doing" | "Done" | "Blocked" | "Suspended";
  categoryId: string;
  tags: TaskTagModel[];
  activities: TaskActivityModel[];
  comments: TaskCommentModel[];
  metadata: Metadata;
}

export interface ReadIssueOutput {
  data: IssueModel[];
  count: number;
}

export interface UpdateIssueData {
  title?: string;
  responsibleId?: string;
  assigneeId?: string;
  categoryId?: string;
  description?: string;
  status?: "Todo" | "Doing" | "Done" | "Blocked" | "Suspended";

  /** @format date-time */
  deadline?: string;
  estimatedTime?: number;
  sprintId?: string;
  projectId?: string;
  tags?: string[];
  metadata?: object;
}

export interface UpdateIssueInput {
  id: string;
  data: UpdateIssueData;
}

export interface DeleteIssueInput {
  id: string;
}

export interface CreateDegreeData {
  title: string;
  value: number;
}

export interface CreateDegreeInput {
  data: CreateDegreeData;
}

export interface DegreeModel {
  id: string;
  title: string;
  value: number;
}

export interface DegreeWhereData {
  id?: string;
  title?: string;
}

export interface ReadDegreeInput {
  where?: DegreeWhereData;
  pagination?: PaginationData;
  sortBy?: SortByData;
}

export interface ReadDegreeOutput {
  data: DegreeModel[];
  count: number;
}

export interface UpdateDegreeData {
  title?: string;
  value?: number;
}

export interface UpdateDegreeInput {
  id: string;
  data: UpdateDegreeData;
}

export interface DeleteDegreeInput {
  id: string;
}

export interface CreateMilestoneData {
  title: string;
  description?: string;

  /** @format date-time */
  startDate: string;

  /** @format date-time */
  dueDate: string;
  projectId: string;
}

export interface CreateMilestoneInput {
  data: CreateMilestoneData;
}

export interface MilestoneWhereData {
  id?: string;
  title?: string;
  description?: string;

  /** @format date-time */
  startDate?: string;

  /** @format date-time */
  dueDate?: string;
  projectId?: string;
}

export interface ReadMilestoneInput {
  where?: MilestoneWhereData;
  pagination?: PaginationData;
  sortBy?: SortByData;
}

export interface ReadMilestoneOutput {
  data: MilestoneModel[];
  count: number;
}

export interface UpdateMilestoneData {
  title?: string;
  description?: string;

  /** @format date-time */
  startDate?: string;

  /** @format date-time */
  dueDate?: string;
}

export interface UpdateMilestoneInput {
  id: string;
  data: UpdateMilestoneData;
}

export interface DeleteMilestoneInput {
  id: string;
}

export interface CreateTagData {
  label: string;
  color: string;
}

export interface CreateTagInput {
  data: CreateTagData;
}

export interface TagWhereData {
  id?: string;
  label?: string;
}

export interface ReadTagInput {
  where?: TagWhereData;
  pagination?: PaginationData;
  sortBy?: SortByData;
}

export interface ReadTagOutput {
  data: TaskTagModel[];
  count: number;
}

export interface UpdateTagData {
  label?: string;
  color?: string;
}

export interface UpdateTagInput {
  id: string;
  data: UpdateTagData;
}

export interface DeleteTagInput {
  id: string;
}

export interface CreateProjectTagData {
  label: string;
  color: string;
}

export interface CreateProjectTagInput {
  data: CreateProjectTagData;
}

export interface ProjectTagWhereData {
  id?: string;
  label?: string;
}

export interface ReadProjectTagInput {
  where?: ProjectTagWhereData;
  pagination?: PaginationData;
  sortBy?: SortByData;
}

export interface ReadProjectTagOutput {
  data: ProjectTagModel[];
  count: number;
}

export interface UpdateProjectTagData {
  label?: string;
  color?: string;
}

export interface UpdateProjectTagInput {
  id: string;
  data: UpdateProjectTagData;
}

export interface DeleteProjectTagInput {
  id: string;
}

export interface CreateEpicData {
  title: string;
  description?: string;

  /** @format date-time */
  deadline?: string;
  parentEpicId?: string;
  projectOrGroupId: string;
  status?: "Todo" | "Doing" | "Done" | "Blocked";
  type: "Project" | "Group";
  taskIdList?: string[];
  childerenEpicIdList?: string[];
}

export interface CreateEpicInput {
  data: CreateEpicData;
}

export interface EpicModel {
  id: string;
  title: string;
  description: string;

  /** @format date-time */
  deadline: string;
  creatorId: string;
  parentEpicId: string;
  projectOrGroupId: string;
  status: "Todo" | "Doing" | "Done" | "Blocked";
  type: "Project" | "Group";

  /** @format date-time */
  createdDate: string;
}

export interface EpicWhereData {
  id?: string;
  creatorId?: string;
  title?: string;
  description?: string;
  status?: "Todo" | "Doing" | "Done" | "Blocked";
  projectOrGroupId?: string;
  parentEpicId?: string;
  deadline?: string;
  type?: "Project" | "Group";

  /** @format date-time */
  createdDate?: string;
}

export interface ReadEpicInput {
  where?: EpicWhereData;
  pagination?: PaginationData;
  sortBy?: SortByData;
}

export interface UpdateEpicData {
  title?: string;
  description?: string;

  /** @format date-time */
  deadline?: string;
  parentEpicId?: string;
  projectOrGroupId?: string;
  status?: "Todo" | "Doing" | "Done" | "Blocked";
  type?: "Project" | "Group";
  taskIdList?: string[];
  childerenEpicIdList?: string[];
}

export interface UpdateEpicInput {
  id: string;
  data: UpdateEpicData;
}

export interface DeleteEpicInput {
  id: string;
}

export interface GetEpicProgressInput {
  id: string;
}

export interface GetEpicProgressData {
  status: "Todo" | "Doing" | "Done" | "Blocked" | "Suspended" | "Verified";
  count: number;
}

export interface GetEpicProgressOutput {
  data: GetEpicProgressData[];
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  private addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  private addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Swagger APIs
 * @version 1.0
 * @contact
 *
 * The Swagger APIs description
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  profile = {
    /**
     * No description
     *
     * @name CreateProfile
     * @request POST:/profile/createProfile
     */
    createProfile: (data: CreateProfileInput, params: RequestParams = {}) =>
      this.request<ProfileModel, any>({
        path: `/profile/createProfile`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReadProfile
     * @request POST:/profile/readProfile
     */
    readProfile: (data: ReadProfileInput, params: RequestParams = {}) =>
      this.request<ReadProfileOutput, any>({
        path: `/profile/readProfile`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateProfile
     * @request POST:/profile/updateProfile
     */
    updateProfile: (data: UpdateProfileInput, params: RequestParams = {}) =>
      this.request<ProfileModel, any>({
        path: `/profile/updateProfile`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name Me
     * @request POST:/profile/me
     */
    me: (params: RequestParams = {}) =>
      this.request<MeOutput, any>({
        path: `/profile/me`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name HasAccessToProfile
     * @request POST:/profile/hasAccessToProfile
     */
    hasAccessToProfile: (data: HasAccessToProfileInput, params: RequestParams = {}) =>
      this.request<HasAccessToProfileOutput, any>({
        path: `/profile/hasAccessToProfile`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReadProfileWithAccess
     * @request POST:/profile/readProfileWithAccess
     */
    readProfileWithAccess: (data: ReadProfileInput, params: RequestParams = {}) =>
      this.request<ReadProfileOutput, any>({
        path: `/profile/readProfileWithAccess`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name SetProfileValidation
     * @request POST:/profile/setProfileValidation
     */
    setProfileValidation: (data: SetProfileValidationInput, params: RequestParams = {}) =>
      this.request<ProfileModel, any>({
        path: `/profile/setProfileValidation`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name SetClientSetting
     * @request POST:/profile/setClientSetting
     */
    setClientSetting: (data: SetClientSettingInput, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/profile/setClientSetting`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetClientSetting
     * @request POST:/profile/getClientSetting
     */
    getClientSetting: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/profile/getClientSetting`,
        method: "POST",
        format: "json",
        ...params,
      }),
  };
  auth = {
    /**
     * No description
     *
     * @name Login
     * @request POST:/auth/login
     */
    login: (data: LoginInput, params: RequestParams = {}) =>
      this.request<LoginOutput, any>({
        path: `/auth/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ChangePassword
     * @request POST:/auth/changePassword
     */
    changePassword: (data: ChangePasswordInput, params: RequestParams = {}) =>
      this.request<UserModel, any>({
        path: `/auth/changePassword`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ForgetPassword
     * @request POST:/auth/forgetPassword
     */
    forgetPassword: (data: ForgetPasswordInput, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/forgetPassword`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name VerifyChangePasswordCode
     * @request POST:/auth/verifyChangePasswordCode
     */
    verifyChangePasswordCode: (data: VerifyChangePasswordCodeInput, params: RequestParams = {}) =>
      this.request<VerifyChangePasswordCodeOutput, any>({
        path: `/auth/verifyChangePasswordCode`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ChangeForgottenPassword
     * @request POST:/auth/changeForgottenPassword
     */
    changeForgottenPassword: (data: ChangeForgottenPasswordInput, params: RequestParams = {}) =>
      this.request<ChangeForgottenPasswordOutput, any>({
        path: `/auth/changeForgottenPassword`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  category = {
    /**
     * No description
     *
     * @name CreateCategory
     * @request POST:/category/createCategory
     */
    createCategory: (data: CreateCategoryInput, params: RequestParams = {}) =>
      this.request<CategoryModel, any>({
        path: `/category/createCategory`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReadCategory
     * @request POST:/category/readCategory
     */
    readCategory: (data: ReadCategoryInput, params: RequestParams = {}) =>
      this.request<ReadCategoryOutput, any>({
        path: `/category/readCategory`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateCategory
     * @request POST:/category/updateCategory
     */
    updateCategory: (data: UpdateCategoryInput, params: RequestParams = {}) =>
      this.request<CategoryModel, any>({
        path: `/category/updateCategory`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteCategory
     * @request POST:/category/deleteCategory
     */
    deleteCategory: (data: DeleteCategoryInput, params: RequestParams = {}) =>
      this.request<CategoryModel, any>({
        path: `/category/deleteCategory`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  project = {
    /**
     * No description
     *
     * @name CreateProject
     * @request POST:/project/createProject
     */
    createProject: (data: CreateProjectInput, params: RequestParams = {}) =>
      this.request<ProjectModel, any>({
        path: `/project/createProject`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReadProject
     * @request POST:/project/readProject
     */
    readProject: (data: ReadProjectInput, params: RequestParams = {}) =>
      this.request<ReadProjectOutput, any>({
        path: `/project/readProject`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateProject
     * @request POST:/project/updateProject
     */
    updateProject: (data: UpdateProjectInput, params: RequestParams = {}) =>
      this.request<ProjectModel, any>({
        path: `/project/updateProject`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteProject
     * @request POST:/project/deleteProject
     */
    deleteProject: (data: DeleteProjectInput, params: RequestParams = {}) =>
      this.request<ProjectModel, any>({
        path: `/project/deleteProject`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  task = {
    /**
     * No description
     *
     * @name CreateTask
     * @request POST:/task/createTask
     */
    createTask: (data: CreateTaskInput, params: RequestParams = {}) =>
      this.request<TaskModel, any>({
        path: `/task/createTask`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReadTask
     * @request POST:/task/readTask
     */
    readTask: (data: ReadTaskInput, params: RequestParams = {}) =>
      this.request<ReadTaskOutput, any>({
        path: `/task/readTask`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateTask
     * @request POST:/task/updateTask
     */
    updateTask: (data: UpdateTaskInput, params: RequestParams = {}) =>
      this.request<TaskModel, any>({
        path: `/task/updateTask`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteTask
     * @request POST:/task/deleteTask
     */
    deleteTask: (data: DeleteTaskInput, params: RequestParams = {}) =>
      this.request<TaskModel, any>({
        path: `/task/deleteTask`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetProjectTasksStatus
     * @request POST:/task/getProjectTasksStatus
     */
    getProjectTasksStatus: (data: GetProjectTasksStatusInput, params: RequestParams = {}) =>
      this.request<GetProjectTasksStatusOutput, any>({
        path: `/task/getProjectTasksStatus`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReadProjectTaskProgressSeperatedByAssignee
     * @request POST:/task/readProjectTaskProgressSeperatedByAssignee
     */
    readProjectTaskProgressSeperatedByAssignee: (
      data: ReadProjectTaskProgressSeperatedByAssigneeInput,
      params: RequestParams = {},
    ) =>
      this.request<ReadProjectTaskProgressSeperatedByAssigneeOutput, any>({
        path: `/task/readProjectTaskProgressSeperatedByAssignee`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetTasksBurndownReport
     * @request POST:/task/getTasksBurndownReport
     */
    getTasksBurndownReport: (data: GetTasksBurndownReportInput, params: RequestParams = {}) =>
      this.request<GetTasksBurndownReportOutput, any>({
        path: `/task/getTasksBurndownReport`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetGroupTasksStatus
     * @request POST:/task/getGroupTasksStatus
     */
    getGroupTasksStatus: (data: GetGroupTasksStatusInput, params: RequestParams = {}) =>
      this.request<GetGroupTasksStatusOutput, any>({
        path: `/task/getGroupTasksStatus`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReadGroupTaskProgressSeperatedByAssignee
     * @request POST:/task/readGroupTaskProgressSeperatedByAssignee
     */
    readGroupTaskProgressSeperatedByAssignee: (
      data: ReadGroupTaskProgressSeperatedByAssigneeInput,
      params: RequestParams = {},
    ) =>
      this.request<ReadddGroupTaskProgressSeperatedByAssigneeOutput, any>({
        path: `/task/readGroupTaskProgressSeperatedByAssignee`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  report = {
    /**
     * No description
     *
     * @name CreateReport
     * @request POST:/report/createReport
     */
    createReport: (data: CreateReportInput, params: RequestParams = {}) =>
      this.request<CreateReportOutput, any>({
        path: `/report/createReport`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReadReport
     * @request POST:/report/readReport
     */
    readReport: (data: ReadReportInput, params: RequestParams = {}) =>
      this.request<ReadReportOutput, any>({
        path: `/report/readReport`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReadReportItem
     * @request POST:/report/readReportItem
     */
    readReportItem: (data: ReadReportItemInput, params: RequestParams = {}) =>
      this.request<ReadReportItemOutput, any>({
        path: `/report/readReportItem`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateReportItemDegree
     * @request POST:/report/updateReportItemDegree
     */
    updateReportItemDegree: (data: UpdateReportItemDegreeInput, params: RequestParams = {}) =>
      this.request<ReportItemModel, any>({
        path: `/report/updateReportItemDegree`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetWorkHoursReport
     * @request POST:/report/getWorkHoursReport
     */
    getWorkHoursReport: (data: GetWorkHoursReportInput, params: RequestParams = {}) =>
      this.request<GetWorkHoursReportOutput, any>({
        path: `/report/getWorkHoursReport`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetWorkHoursClassifiedReport
     * @request POST:/report/getWorkHoursClassifiedReport
     */
    getWorkHoursClassifiedReport: (data: GetWorkHoursClassifiedReportInput, params: RequestParams = {}) =>
      this.request<GetWorkHoursClassifiedReportOutput, any>({
        path: `/report/getWorkHoursClassifiedReport`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateReport
     * @request POST:/report/updateReport
     */
    updateReport: (data: UpdateReportInput, params: RequestParams = {}) =>
      this.request<ReportModel, any>({
        path: `/report/updateReport`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name SetReportValidation
     * @request POST:/report/setReportValidation
     */
    setReportValidation: (data: SetReportValidationInput, params: RequestParams = {}) =>
      this.request<ReportModel, any>({
        path: `/report/setReportValidation`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReadReportItemByParameter
     * @request POST:/report/readReportItemByParameter
     */
    readReportItemByParameter: (data: ReadReportItemByParameterInput, params: RequestParams = {}) =>
      this.request<ReadReportItemByParameterOutput, any>({
        path: `/report/readReportItemByParameter`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReadProjectSpentTimeSepratedByUser
     * @request POST:/report/readProjectSpentTimeSepratedByUser
     */
    readProjectSpentTimeSepratedByUser: (data: ReadProjectSpentTimeSepratedByUserInput, params: RequestParams = {}) =>
      this.request<ReadProjectSpentTimeSepratedByUserOutput, any>({
        path: `/report/readProjectSpentTimeSepratedByUser`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetTaskSpentTime
     * @request POST:/report/getTaskSpentTime
     */
    getTaskSpentTime: (data: GetTaskSpentTimeInput, params: RequestParams = {}) =>
      this.request<GetTaskSpentTimeOutput, any>({
        path: `/report/getTaskSpentTime`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReadGroupSpentTimeSepratedByUser
     * @request POST:/report/readGroupSpentTimeSepratedByUser
     */
    readGroupSpentTimeSepratedByUser: (data: ReadGroupSpentTimeSepratedByUserInput, params: RequestParams = {}) =>
      this.request<ReadGroupSpentTimeSepratedByUserOutput, any>({
        path: `/report/readGroupSpentTimeSepratedByUser`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  event = {
    /**
     * No description
     *
     * @name CreateEvent
     * @request POST:/event/createEvent
     */
    createEvent: (data: CreateEventInput, params: RequestParams = {}) =>
      this.request<EventModel, any>({
        path: `/event/createEvent`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReadEvent
     * @request POST:/event/readEvent
     */
    readEvent: (data: ReadEventInput, params: RequestParams = {}) =>
      this.request<ReadEventOutput, any>({
        path: `/event/readEvent`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateEvent
     * @request POST:/event/updateEvent
     */
    updateEvent: (data: UpdateEventInput, params: RequestParams = {}) =>
      this.request<EventModel, any>({
        path: `/event/updateEvent`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteEvent
     * @request POST:/event/deleteEvent
     */
    deleteEvent: (data: DeleteEventInput, params: RequestParams = {}) =>
      this.request<EventModel, any>({
        path: `/event/deleteEvent`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  comment = {
    /**
     * No description
     *
     * @name CreateComment
     * @request POST:/comment/createComment
     */
    createComment: (data: CreateCommentInput, params: RequestParams = {}) =>
      this.request<TaskCommentModel, any>({
        path: `/comment/createComment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReadComment
     * @request POST:/comment/readComment
     */
    readComment: (data: ReadCommentInput, params: RequestParams = {}) =>
      this.request<ReadCommentOutput, any>({
        path: `/comment/readComment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateComment
     * @request POST:/comment/updateComment
     */
    updateComment: (data: UpdateCommentInput, params: RequestParams = {}) =>
      this.request<TaskCommentModel, any>({
        path: `/comment/updateComment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteComment
     * @request POST:/comment/deleteComment
     */
    deleteComment: (data: DeleteCommentInput, params: RequestParams = {}) =>
      this.request<TaskCommentModel, any>({
        path: `/comment/deleteComment`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  issue = {
    /**
     * No description
     *
     * @name CreateIssue
     * @request POST:/issue/createIssue
     */
    createIssue: (data: CreateIssueInput, params: RequestParams = {}) =>
      this.request<TaskModel, any>({
        path: `/issue/createIssue`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReadIssue
     * @request POST:/issue/readIssue
     */
    readIssue: (data: ReadIssueInput, params: RequestParams = {}) =>
      this.request<ReadIssueOutput, any>({
        path: `/issue/readIssue`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateIssue
     * @request POST:/issue/updateIssue
     */
    updateIssue: (data: UpdateIssueInput, params: RequestParams = {}) =>
      this.request<TaskModel, any>({
        path: `/issue/updateIssue`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteIssue
     * @request POST:/issue/deleteIssue
     */
    deleteIssue: (data: DeleteIssueInput, params: RequestParams = {}) =>
      this.request<TaskModel, any>({
        path: `/issue/deleteIssue`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  degree = {
    /**
     * No description
     *
     * @name CreateDegree
     * @request POST:/degree/createDegree
     */
    createDegree: (data: CreateDegreeInput, params: RequestParams = {}) =>
      this.request<DegreeModel, any>({
        path: `/degree/createDegree`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReadDegree
     * @request POST:/degree/readDegree
     */
    readDegree: (data: ReadDegreeInput, params: RequestParams = {}) =>
      this.request<ReadDegreeOutput, any>({
        path: `/degree/readDegree`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateDegree
     * @request POST:/degree/updateDegree
     */
    updateDegree: (data: UpdateDegreeInput, params: RequestParams = {}) =>
      this.request<DegreeModel, any>({
        path: `/degree/updateDegree`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteDegree
     * @request POST:/degree/deleteDegree
     */
    deleteDegree: (data: DeleteDegreeInput, params: RequestParams = {}) =>
      this.request<DegreeModel, any>({
        path: `/degree/deleteDegree`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  milestone = {
    /**
     * No description
     *
     * @name CreateMilestone
     * @request POST:/milestone/createMilestone
     */
    createMilestone: (data: CreateMilestoneInput, params: RequestParams = {}) =>
      this.request<MilestoneModel, any>({
        path: `/milestone/createMilestone`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReadMilestone
     * @request POST:/milestone/readMilestone
     */
    readMilestone: (data: ReadMilestoneInput, params: RequestParams = {}) =>
      this.request<ReadMilestoneOutput, any>({
        path: `/milestone/readMilestone`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateMilestone
     * @request POST:/milestone/updateMilestone
     */
    updateMilestone: (data: UpdateMilestoneInput, params: RequestParams = {}) =>
      this.request<MilestoneModel, any>({
        path: `/milestone/updateMilestone`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteMilestone
     * @request POST:/milestone/deleteMilestone
     */
    deleteMilestone: (data: DeleteMilestoneInput, params: RequestParams = {}) =>
      this.request<MilestoneModel, any>({
        path: `/milestone/deleteMilestone`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  tasktag = {
    /**
     * No description
     *
     * @name CreateTaskTag
     * @request POST:/tasktag/createTaskTag
     */
    createTaskTag: (data: CreateTagInput, params: RequestParams = {}) =>
      this.request<TaskTagModel, any>({
        path: `/tasktag/createTaskTag`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReadTaskTag
     * @request POST:/tasktag/readTaskTag
     */
    readTaskTag: (data: ReadTagInput, params: RequestParams = {}) =>
      this.request<ReadTagOutput, any>({
        path: `/tasktag/readTaskTag`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateTaskTag
     * @request POST:/tasktag/updateTaskTag
     */
    updateTaskTag: (data: UpdateTagInput, params: RequestParams = {}) =>
      this.request<TaskTagModel, any>({
        path: `/tasktag/updateTaskTag`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteTaskTag
     * @request POST:/tasktag/deleteTaskTag
     */
    deleteTaskTag: (data: DeleteTagInput, params: RequestParams = {}) =>
      this.request<TaskTagModel, any>({
        path: `/tasktag/deleteTaskTag`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  projectTag = {
    /**
     * No description
     *
     * @name CreateProjectTag
     * @request POST:/projectTag/createProjectTag
     */
    createProjectTag: (data: CreateProjectTagInput, params: RequestParams = {}) =>
      this.request<ProjectTagModel, any>({
        path: `/projectTag/createProjectTag`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReadProjectTag
     * @request POST:/projectTag/readProjectTag
     */
    readProjectTag: (data: ReadProjectTagInput, params: RequestParams = {}) =>
      this.request<ReadProjectTagOutput, any>({
        path: `/projectTag/readProjectTag`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateProjectTag
     * @request POST:/projectTag/updateProjectTag
     */
    updateProjectTag: (data: UpdateProjectTagInput, params: RequestParams = {}) =>
      this.request<ProjectTagModel, any>({
        path: `/projectTag/updateProjectTag`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteProjectTag
     * @request POST:/projectTag/deleteProjectTag
     */
    deleteProjectTag: (data: DeleteProjectTagInput, params: RequestParams = {}) =>
      this.request<ProjectTagModel, any>({
        path: `/projectTag/deleteProjectTag`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  consistancyChecker = {
    /**
     * No description
     *
     * @name ConsistancyChecking
     * @request POST:/consistancyChecker/consistancyChecking
     */
    consistancyChecking: (params: RequestParams = {}) =>
      this.request<boolean, any>({
        path: `/consistancyChecker/consistancyChecking`,
        method: "POST",
        format: "json",
        ...params,
      }),
  };
  epic = {
    /**
     * No description
     *
     * @name CreateEpic
     * @request POST:/epic/createEpic
     */
    createEpic: (data: CreateEpicInput, params: RequestParams = {}) =>
      this.request<EpicModel, any>({
        path: `/epic/createEpic`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ReadEpic
     * @request POST:/epic/readEpic
     */
    readEpic: (data: ReadEpicInput, params: RequestParams = {}) =>
      this.request<EpicModel, any>({
        path: `/epic/readEpic`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateEpic
     * @request POST:/epic/updateEpic
     */
    updateEpic: (data: UpdateEpicInput, params: RequestParams = {}) =>
      this.request<EpicModel, any>({
        path: `/epic/updateEpic`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteEpic
     * @request POST:/epic/deleteEpic
     */
    deleteEpic: (data: DeleteEpicInput, params: RequestParams = {}) =>
      this.request<EpicModel, any>({
        path: `/epic/deleteEpic`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetEpicTreeDiagram
     * @request POST:/epic/getEpicTreeDiagram
     */
    getEpicTreeDiagram: (data: GetEpicProgressInput, params: RequestParams = {}) =>
      this.request<GetEpicProgressOutput, any>({
        path: `/epic/getEpicTreeDiagram`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name GetEpicProgress
     * @request POST:/epic/getEpicProgress
     */
    getEpicProgress: (data: GetEpicProgressInput, params: RequestParams = {}) =>
      this.request<GetEpicProgressOutput, any>({
        path: `/epic/getEpicProgress`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
